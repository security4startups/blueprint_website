var xl = require("excel4node")

export function generateExcel(controldata) {
  const { seed, seriesa, crossed, checked } = controldata
  var controls = []

  if (seed.length > 0 || seriesa.length > 0) {
    var data = []
    const { seedcontrol, seriesacontrol } = controldata
    if (seedcontrol) data = [...seed]
    if (seriesacontrol) data = [...data, ...seriesa]

    const sections = [...new Set(data.map(x => x.safeguardsConsiderations))]

    sections.map((sec, secindex) => {
      var secitems = data.filter(item => item.safeguardsConsiderations == sec)

      secitems = secitems.filter(item => {
        var condition = false
        var cond1,
          cond2,
          cond3 = false

        const { corporate, product, productInfrastructure } = controldata
        if (corporate)
          if ("undefined" === typeof item["corporate"]) cond1 = false
          else cond1 = true
        if (product)
          if ("undefined" === typeof item["product"]) cond2 = false
          else cond2 = true

        if (productInfrastructure)
          if ("undefined" === typeof item["productInfrastructure"])
            cond3 = false
          else cond3 = true

        if (cond1 || cond2 || cond3) condition = true
        else condition = false
        return condition
      })

      const items = secitems.filter((item, index) => {
        if (!crossed.includes(item.id)) return true
      })
      controls.push(...items)
    })
    var wb = new xl.Workbook({
      defaultFont: {
        size: 10,
        name: "Arial",
        color: "7f7f7f",
      },
    })

    var ws = wb.addWorksheet("Sheet 1")
    ws.column(1).setWidth(45.22)
    ws.column(2).setWidth(45.22)
    ws.column(3).setWidth(45.22)
    ws.column(4).setWidth(45.22)
    ws.column(5).setWidth(45.22)
    ws.column(6).setWidth(10)
    ws.column(7).setWidth(15)
    ws.column(8).setWidth(10)
    ws.column(9).setWidth(0.63)

    const headStyle = {
      font: {
        size: 15,
        name: "Calibri",
        color: "44546a",
        bold: true,
      },
      border: {
        bottom: {
          color: "4473c4",
          style: "thick",
        },
      },
    }

    const saperatorCell = {
      fill: {
        type: "pattern",
        fgColor: "#7f7f7f",
        patternType: "solid",
      },
    }

    const rowStyle = {
      alignment: { shrinkToFit: true, wrapText: true, indent: 1 },
    }

    const header = [
      "Category",
      "Controls",
      "Details",
      "Tool examples",
      "Reference",
      "Corporate",
      "Product Infrastructure",
      "Product",
    ]
    // var groupBy = function(xs, key) {
    //   return xs.reduce(function(rv, x) {
    //     (rv[x[key]] = rv[x[key]] || []).push(x);
    //     return rv;
    //   }, {});
    // };
    // var data = groupBy(jsonData, "safeguardsConsiderations");
    header.map((item, index) => {
      ws.cell(1, index + 1)
        .string(item)
        .style(headStyle)
      if (index == header.length - 1) {
        ws.cell(1, index + 2)
          .string("")
          .style(saperatorCell)
      }
    })

    var row = 2

    controls.map((item, index) => {
      ws.cell(row, 1)
        .string(item.safeguardsConsiderations)
        .style(rowStyle)
      ws.cell(row, 2)
        .string(item.controls)
        .style(rowStyle)
      ws.cell(row, 3)
        .string(item.details)
        .style(rowStyle)
      ws.cell(row, 4)
        .string(item.suggestedTools)
        .style(rowStyle)
      ws.cell(row, 5)
        .string(item.reference)
        .style(rowStyle)
      ws.cell(row, 6)
        .string(item.corporate)
        .style(rowStyle)
      ws.cell(row, 7)
        .string(item.productInfrastructure)
        .style(rowStyle)
      ws.cell(row, 8)
        .string(item.product)
        .style(rowStyle)
      ws.cell(row, 9)
        .string("")
        .style(saperatorCell)
      row += 1
    })

    var exportedFilenmae =
      "Security Controls" + ".xlsx" || "Security Controls.xlsx"

    wb.writeToBuffer().then(function(buffer) {
      // Do something with buffer
      var blob = new Blob([buffer], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      })
      if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae)
      } else {
        var link = document.createElement("a")
        if (link.download !== undefined) {
          // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob)
          link.setAttribute("href", url)
          link.setAttribute("download", exportedFilenmae)
          link.style.visibility = "hidden"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }
    })
  }
}
