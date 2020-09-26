(function () {

    var app = angular.module('bikeStore', []);
    
    var datasource = 'https://raw.githubusercontent.com/jujhars13/jujhars13/master/bikes.json'; // external JSON datasource 
    var keyPrefixForStorage = "pl.fi."; // prefixed to all filter keys we store in session storage

    app.controller('prodList', ['$scope', '$http', function ($scope, $http) {

        $http.get(datasource).then(function (response) {

            $scope.products = response.data.items;

            // list of attributes we want to filter our data on
            // add more attributes to this list to display them in the filter options
            $scope.attributesToFilter = ["class"];

            // initialise the datafilters
            $scope.dataFilters = $scope.getDataFilters($scope.products, $scope.attributesToFilter);

            // read set filters from session storage to keep filters on page refresh
            $scope.setFilterStates($scope.dataFilters);

            // filter the products as per the selected filters
            $scope.filteredProducts = $scope.filterProducts($scope.products, $scope.dataFilters);

        });

        /**
         * Gets the list of dataFilters from the products 
         * 
         * @param {any} products
         * @param {any} attributesToFilter
         * @returns dataFilters
         */
        $scope.getDataFilters = function (products, attributesToFilter) {

            // list of data filters to return
            var dataFilters = [];

            // loop through each attribute we want to add to the filtering e.g. "class" etc 
            angular.forEach(attributesToFilter, function (key) {

                // find if any products have any values for this attibute e.g. "race", "endurance" etc
                angular.forEach(products, function (product) {
                    angular.forEach(product[key], function (value) {

                        var newFilterOption =
                            {
                                "key": key,
                                "value": value,
                                "state": false
                            };

                        // get a list of any duplicates we may have already added
                        var duplicates = dataFilters.filter(
                            filterOption =>
                                filterOption.key == newFilterOption.key
                                && filterOption.value == newFilterOption.value
                        );

                        // if we will not duplicate the new filter option then add it to the list
                        if (duplicates.length == 0) {
                            dataFilters.push(newFilterOption);
                        }

                    }, this);
                }, this);
            }, this);

            return dataFilters;
        }

        /**
         * Toogles the state of a datafilter 
         * 
         * @param {any} key of datafilter to toggle
         * @param {any} value of datafilter to toggle
         */
        $scope.toggleFilter = function (key, value) {

            // work out what the state should be
            var filterToToggle = $scope.dataFilters.filter(
                filterOption =>
                    filterOption.key == key
                    && filterOption.value == value
            )[0];

            filterToToggle.state = !filterToToggle.state;

            // store or remove the toggled filter from session storage
            if (filterToToggle.state) {
                sessionStorage.setItem(keyPrefixForStorage + filterToToggle.key + filterToToggle.value, 1);
            }
            else {
                sessionStorage.removeItem(keyPrefixForStorage + filterToToggle.key + filterToToggle.value);
            }

            // filter the products as per the selected filters
            $scope.filteredProducts = $scope.filterProducts($scope.products, $scope.dataFilters);
        }

        /**
         * Filters a list of products in accordance to the supplied filters
         * 
         * @param {any} products
         * @param {any} dataFilters
         * @returns filtered products
         */
        $scope.filterProducts = function (products, dataFilters) {

            var filtersSelected = dataFilters.filter(
                filterOption =>
                    filterOption.state == true
            );

            // do we have any filters to fitler by?
            if (filtersSelected.length > 0) {

                var filteredProducts = [];

                // loop through all products
                angular.forEach(products, function (product) {

                    var productMissingAttribute = false;

                    // loop through all selected filters
                    angular.forEach(filtersSelected, function (filterOption) {

                        // can we find a matching value for this attribute?
                        var valueFound = product[filterOption.key].filter(
                            value =>
                                value == filterOption.value
                        ).length > 0;

                        // if no matching value is found then set the flag to make sure we don't add this to the filtered products
                        if (!valueFound) {
                            productMissingAttribute = true;
                        }

                    }, this);

                    // add to the list of filtered products
                    if (!productMissingAttribute) {
                        filteredProducts.push(product);
                    }

                }, true);

                // return filtered products
                return filteredProducts;
            }
            else {
                // no filters to filter by so just return list of all products unfiltered
                return products;
            }
        }


        /**
         * Gets the values of any applied filters from session storage 
         * Can be used to reload filters on page refresh
         * 
         * @param {any} filterOptions
         */
        $scope.setFilterStates = function (filterOptions) {
            angular.forEach(filterOptions, function (filterOption) {
                if (sessionStorage.getItem(keyPrefixForStorage + filterOption.key + filterOption.value) == '1') {
                    filterOption.state = true;
                }
            }, true);
        }

    }]);

})();


