<script>
  import MetricCard from "./metric/MetricCard";
  import GraphCard from "./charts/GraphCard";
</script>

<div class="container w-full mx-auto pt-20">

  <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

    <!--Console Content-->
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <MetricCard />
        <!--/Metric Card-->
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <MetricCard
          title="Total Users"
          count="249"
          color="orange"
          mainIcon="fa-users"
          countIcon="fa-exchange-alt" />
        <!--/Metric Card-->
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <MetricCard
          title="New Users"
          count="2"
          color="yellow"
          mainIcon="fa-user-plus"
          countIcon="fa-caret-up" />
        <!--/Metric Card-->
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <MetricCard
          title="Server Uptime"
          count="152 days"
          color="blue"
          mainIcon="fa-server"
          countIcon="" />
        <!--/Metric Card-->
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <MetricCard
          title="To Do List"
          count="7 tasks"
          color="indigo"
          mainIcon="fa-tasks"
          countIcon="" />
        <!--/Metric Card-->
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <MetricCard
          title="Issues"
          count="3"
          color="red"
          mainIcon="fa-inbox"
          countIcon="fa-caret-up" />
        <!--/Metric Card-->
      </div>
    </div>

    <!--Divider-->
    <hr class="border-b-2 border-gray-400 my-8 mx-4" />

    <div class="flex flex-row flex-wrap flex-grow mt-2">

      <div class="w-full md:w-1/2 p-3">
        <!--Graph Card-->
        <GraphCard elementId="chartjs-0" />
        <!--/Graph Card-->
      </div>

      <div class="w-full md:w-1/2 p-3">
        <!--Graph Card-->
        <GraphCard
          elementId="chartjs-7"
          options={{ type: 'line', data: { labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], datasets: [{ label: 'Views', data: [65, 59, 80, 81, 56, 55, 40], fill: false, borderColor: 'rgb(75, 192, 192)', lineTension: 0.1 }] }, options: {} }} />

        <!--/Graph Card-->
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Graph Card-->
        <GraphCard
          elementId="chartjs-1"
          options={{ type: 'bar', data: { labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], datasets: [{ label: 'Likes', data: [65, 59, 80, 81, 56, 55, 40], fill: false, backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)'], borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'], borderWidth: 1 }] }, options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } } }} />
        <!--/Graph Card-->
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Graph Card-->
        <GraphCard
          elementId="chartjs-4"
          options={{ type: 'doughnut', data: { labels: ['P1', 'P2', 'P3'], datasets: [{ label: 'Issues', data: [300, 50, 100], backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'] }] } }} />
        <!--/Graph Card-->
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Template Card-->
        <div class="bg-white border rounded shadow">
          <div class="border-b p-3">
            <h5 class="font-bold uppercase text-gray-600">Template</h5>
          </div>
          <div class="p-5" />
        </div>
        <!--/Template Card-->
      </div>

      <div class="w-full p-3">
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
          <div class="border-b p-3">
            <h5 class="font-bold uppercase text-gray-600">Table</h5>
          </div>
          <div class="p-5">
            <table class="w-full p-5 text-gray-700">
              <thead>
                <tr>
                  <th class="text-left text-blue-900">Name</th>
                  <th class="text-left text-blue-900">Side</th>
                  <th class="text-left text-blue-900">Role</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Obi Wan Kenobi</td>
                  <td>Light</td>
                  <td>Jedi</td>
                </tr>
                <tr>
                  <td>Greedo</td>
                  <td>South</td>
                  <td>Scumbag</td>
                </tr>
                <tr>
                  <td>Darth Vader</td>
                  <td>Dark</td>
                  <td>Sith</td>
                </tr>
              </tbody>
            </table>

            <p class="py-2">
              <a href="#">See More issues...</a>
            </p>

          </div>
        </div>
        <!--/table Card-->
      </div>

    </div>

    <!--/ Console Content-->

  </div>

</div>
