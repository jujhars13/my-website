describe('prodList Controller', function () {

    var $httpBackend, $rootScope, createController;

    // Mock product data JSON for unit tests
    var mockBikeJSON = {
        "items": [
            {
                "id": 1,
                "class": ["endurance", "race"],
                "gears": ["21"]
            },
            {
                "id": 2,
                "class": ["endurance", "race"],
                "gears": ["21"]
            },
            {
                "id": 3,
                "class": ["comfort", "endurance", "race"],
                "gears": ["18"]
            },
        ]
    };

    var mockFiltersClassComfort = [{"key":"class","value":"endurance","state":false},{"key":"class","value":"race","state":false},{"key":"class","value":"comfort","state":true}];
    var mockFiltersClassComfort18GearsTrue = [{"key":"class","value":"endurance","state":false},{"key":"class","value":"race","state":false},{"key":"class","value":"comfort","state":true},{"key":"gears","value":"21","state":false},{"key":"gears","value":"18","state":true}];
    var mockFiltersClassComfort21GearsTrue = [{"key":"class","value":"endurance","state":false},{"key":"class","value":"race","state":false},{"key":"class","value":"comfort","state":true},{"key":"gears","value":"21","state":true},{"key":"gears","value":"18","state":false}];

    beforeEach(module('bikeStore'));

    beforeEach(inject(function ($injector) {

        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // backend definition common for all tests
        $httpBackend
            .when('GET', /.json/)
            .respond(mockBikeJSON);

        $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');

        // define function create controller
        createController = function () {
            return $controller('prodList', { '$scope': $rootScope });
        };

    }));

    beforeEach(function () {
        createController();
        $httpBackend.flush();
    });

    afterEach(function () {

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();

    });

    // Basic test for loading the product data
    it('when we create controller then we get product data loaded', function () {

        expect($rootScope.products).not.toBeUndefined();
        expect($rootScope.products.length).toBeGreaterThan(0);

    });

    // basic test that get data filters returns filters
    it('when we get data filters we get some data filters', function () {
        
        var dataFilters = $rootScope.getDataFilters(mockBikeJSON.items, ["class"]);

        expect(dataFilters).not.toBeUndefined();
        expect(dataFilters.length).toBeGreaterThan(0);

    });

    // basic test that get data filters expected number of filters
    it('when we get data filters we get the expected number of data filters', function () {
        
        var dataFilters = $rootScope.getDataFilters(mockBikeJSON.items, ["class", "gears"]);

        expect(dataFilters).not.toBeUndefined();
        expect(dataFilters.length).toEqual(5);

    });

    it('when we get data filters we get only unique data filters', function () {

        // inject our own parametes to getDataFilters
        var dataFilters = $rootScope.getDataFilters(mockBikeJSON.items, ["class", "gears"]);

        // get a unique list
        var values = dataFilters.map(filter => filter.value);
        var result = values.filter((value, index) => values.indexOf(value) == index);

        // test unique list length matches
        expect(result.length).toEqual(dataFilters.length);

    });

    // test toggle filer
    it('when we toggle a dataFilter the state changes', function () {
        var keyToToggle = "class";
        var valueToToggle = "race"

        var filterToToggle = $rootScope.dataFilters.filter(
            filterOption => 
            filterOption.key == keyToToggle 
            && filterOption.value == valueToToggle
        )[0];

        if (filterToToggle.state)
        {
            $rootScope.toggleFilter(keyToToggle, valueToToggle);
            expect(filterToToggle.state).toBeFalsy();
            $rootScope.toggleFilter(keyToToggle, valueToToggle);
            expect(filterToToggle.state).toBeTruthy();
        }
        else
        {
            $rootScope.toggleFilter(keyToToggle, valueToToggle);
            expect(filterToToggle.state).toBeTruthy();
            $rootScope.toggleFilter(keyToToggle, valueToToggle);
            expect(filterToToggle.state).toBeFalsy();
        }
    });

    it('when we filter by "class: comfort" we get 1 result', function () {

		var controller = createController();
		$httpBackend.flush();

        // call filtered products with mock data
        var filteredProducts = $rootScope.filterProducts(mockBikeJSON.items, mockFiltersClassComfort)

        // we are execting no results
        expect(filteredProducts.length).toEqual(1);
		
	});

    it('when we filter by "class: comfort" and "gears: 21" we get no results', function () {

		var controller = createController();
		$httpBackend.flush();

        // call filtered products with mock data
        var filteredProducts = $rootScope.filterProducts(mockBikeJSON.items, mockFiltersClassComfort21GearsTrue)

        // we are execting no results
        expect(filteredProducts.length).toEqual(0);
		
	});

    it('when we filter by "class: comfort" and "gears: 18" we get one result', function () {

		var controller = createController();
		$httpBackend.flush();

        // call filtered products with mock data
        var filteredProducts = $rootScope.filterProducts(mockBikeJSON.items, mockFiltersClassComfort18GearsTrue)

        // we are execting no results
        expect(filteredProducts.length).toEqual(1);
		
	});

});