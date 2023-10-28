export function Home() {

    const $home = document.createElement('div');

    $home.innerHTML =
    `
    <div class="mt-5">
    <br>
    <br>
      <center>
        <span class="montserrat_regular" style="color:#410677;font-size:1em;">MOMENTOS</span> <br>
        <span style="font-size:4em;color:#410677; margin-top:-300px;" class="sego">marianis</span>
      </center>
    </div>
    `
    return $home;

}