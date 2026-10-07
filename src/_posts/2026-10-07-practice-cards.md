---
section: music
subsection: beginners
---

# Practice Cards

Printing gives three copies of each card per page, one per week. Cut them out, write the week commencing date, and tick a box each day you practice.

<p class="no-print"><button type="button" class="btn btn-outline-secondary btn-sm" onclick="window.print()">🖨 Print cards</button></p>

{% assign days = "Mon,Tue,Wed,Thu,Fri,Sat,Sun" | split: "," %}
{% for card in practiceCards %}
<div class="practice-card-set">
{% for copy in (1..3) %}
{% assign total = 0 %}{% for step in card.steps %}{% assign total = total | plus: step.minutes %}{% endfor %}
<div class="practice-card{% if copy > 1 %} print-only{% endif %}">
  <div class="practice-card-header">
    <h4>{{ card.number }}. {{ card.name }} <small class="text-muted">— {{ total }} mins</small></h4>
  </div>
  <div class="practice-card-fields">
    <div>Name: <span class="practice-card-blank practice-card-blank-wide"></span></div>
    <div>Week commencing: <span class="practice-card-blank"></span></div>
  </div>
  <p>{{ card.intro }}</p>
  <p class="practice-card-benefits"><strong>Why:</strong> {{ card.benefits }}</p>
  <ol class="practice-card-steps">
    {% for step in card.steps %}<li><strong>{{ step.note }}</strong> — {{ step.minutes }} mins</li>{% endfor %}
  </ol>
  <div class="practice-card-days">
    {% for day in days %}<div class="practice-card-day"><span class="practice-card-box"></span>{{ day }}</div>{% endfor %}
  </div>
</div>
{% endfor %}
</div>
{% endfor %}
