<script>
  export let title = "Total Revenue";
  export let count = "$3249";
  export let mainIcon = "fa-wallet";
  export let countIcon = "fa-caret-up";
  export let color = "green";
</script>

<div class="bg-white rounded shadow p-2">
  <div class="flex flex-row items-center">
    <div class="flex-shrink pr-4">
      <div class="rounded p-3 bg-{color}-600">
        <i class="fa {mainIcon} fa-2x fa-fw fa-inverse" />
      </div>
    </div>
    <div class="flex-1 text-right md:text-center">
      <h5 class="font-bold uppercase text-gray-500">{title}</h5>
      <h3 class="font-bold text-3xl">
         {count}
        <span class="text-{color}-500">
          <i class="fas {countIcon}" />
        </span>
      </h3>
    </div>
  </div>
</div>
