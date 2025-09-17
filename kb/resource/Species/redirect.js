(function() {
  // Get the current path, e.g. "/kb/resource/Species/1"
  const path = window.location.pathname;

  // Extract the last part (the ID)
  const parts = path.split("/").filter(Boolean);
  const id = parts[parts.length - 1];

  // Construct the target URL
  const target = "https://demos.isl.ics.forth.gr/semantyfish-api/resources/species/" + id;

  // Update the fallback link
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("redirect-link").href = target;
  });

  // Perform the redirect
  window.location.replace(target);
})();