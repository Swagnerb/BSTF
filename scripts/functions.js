// Generic Imported Functions

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let db = [];
$(function () { //Get JSON file and build table UI
  $.ajax({
    type: "get",
    url: "data.json",
    dataType: "json",
    cache: true,
    success: function (data) {
      db = data.myData;

      generateTable(document.getElementById("myTable"), db);
      generateTableHead(
        document.getElementById("myTable"),
        Object.keys(db[0])
      );
      attrMyTable();

      let colIndx = 0;
      $("#myTableHead > tr > th").each(function () {
        $("#myTableColumns").append(`<col id="col${colIndx}">`);
        colIndx++;
      });

      $("#myTableColumns").children().slice(-1).css("min-width", "200px");
    },
  });
});