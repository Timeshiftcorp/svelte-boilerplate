<script>
  import { onMount } from "svelte";
  export let elementId = "chartjs-7";
  export let options = {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "Page Impressions",
          data: [10, 20, 30, 40],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)"
        },
        {
          label: "Adsense Clicks",
          data: [5, 15, 10, 30],
          type: "line",
          fill: false,
          borderColor: "rgb(54, 162, 235)"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };
  export let width = 1;
  export let height = 1;

  onMount(async () => {
    return await new Chart(document.getElementById(elementId), options);
  });
</script>

<div class="bg-white border rounded shadow">
  <div class="border-b p-3">
    <h5 class="font-bold uppercase text-gray-600">Graph</h5>
  </div>
  <div class="p-5">
    <canvas id={elementId} class="chartjs" {width} {height} />

  </div>
</div>
