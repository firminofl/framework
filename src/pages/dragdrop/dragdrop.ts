import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";

declare var google;

@Component({
  selector: "page-dragdrop",
  templateUrl: "dragdrop.html"
})
export class DragDropPage {
  inputs: Array<{ title: string; type: string; value: string; class: string }>;
  inputsChbox: Array<{
    title: string;
    type: string;
    value: string;
    class: string;
  }>;
  ios: string;
  md: string;
  flag_of_lock: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.inputs = [];
    this.inputsChbox = [];
    this.ios = "ios-unlock";
    this.md = "md-unlock";
    this.flag_of_lock = false;
  }

  pieChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Topping");
    data.addColumn("number", "Slices");
    data.addRows([
      ["Mushrooms", 3],
      ["Onions", 1],
      ["Olives", 1],
      ["Zucchini", 1],
      ["Pepperoni", 2]
    ]);

    // Set chart options
    var options = { title: "Chart", width: 400, height: 300 };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }

  barChart() {
    var data = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }],
      ["Copper", 8.94, "#b87333"],
      ["Silver", 10.49, "silver"],
      ["Gold", 19.3, "gold"],
      ["Platinum", 21.45, "color: #e5e4e2"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
      },
      2
    ]);

    var options = {
      title: "Density of Precious Metals, in g/cm^3",
      width: 600,
      height: 400,
      bar: { groupWidth: "95%" },
      legend: { position: "none" }
    };
    var chart = new google.visualization.BarChart(
      document.getElementById("chart_div")
    );
    chart.draw(view, options);
  }

  histogramChart() {
    var data = google.visualization.arrayToDataTable([
      ["Dinosaur", "Length"],
      ["Acrocanthosaurus (top-spined lizard)", 12.2],
      ["Albertosaurus (Alberta lizard)", 9.1],
      ["Allosaurus (other lizard)", 12.2],
      ["Apatosaurus (deceptive lizard)", 22.9],
      ["Archaeopteryx (ancient wing)", 0.9],
      ["Argentinosaurus (Argentina lizard)", 36.6],
      ["Baryonyx (heavy claws)", 9.1],
      ["Brachiosaurus (arm lizard)", 30.5],
      ["Ceratosaurus (horned lizard)", 6.1],
      ["Coelophysis (hollow form)", 2.7],
      ["Compsognathus (elegant jaw)", 0.9],
      ["Deinonychus (terrible claw)", 2.7],
      ["Diplodocus (double beam)", 27.1],
      ["Dromicelomimus (emu mimic)", 3.4],
      ["Gallimimus (fowl mimic)", 5.5],
      ["Mamenchisaurus (Mamenchi lizard)", 21.0],
      ["Megalosaurus (big lizard)", 7.9],
      ["Microvenator (small hunter)", 1.2],
      ["Ornithomimus (bird mimic)", 4.6],
      ["Oviraptor (egg robber)", 1.5],
      ["Plateosaurus (flat lizard)", 7.9],
      ["Sauronithoides (narrow-clawed lizard)", 2.0],
      ["Seismosaurus (tremor lizard)", 45.7],
      ["Spinosaurus (spiny lizard)", 12.2],
      ["Supersaurus (super lizard)", 30.5],
      ["Tyrannosaurus (tyrant lizard)", 15.2],
      ["Ultrasaurus (ultra lizard)", 30.5],
      ["Velociraptor (swift robber)", 1.8]
    ]);

    var options = {
      title: "Lengths of dinosaurs, in meters",
      legend: { position: "none" }
    };

    var chart = new google.visualization.Histogram(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }

  addElementClicked(elementClicked) {
    let alert = this.alertCtrl.create({
      title: "Give a nickname to the component",
      subTitle: "Exemple: It's magic this",
      inputs: [
        {
          name: "nickname",
          placeholder: "nickname"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked! Caution");
          }
        },
        {
          text: "Done",
          handler: data => {
            if (elementClicked == "button") {
              this.inputs.push({
                title: data.nickname,
                type: "button",
                value: data.nickname,
                class: "btn"
              });
            } else if (elementClicked == "checkbox") {
              this.inputsChbox.push({
                title: data.nickname,
                type: "checkbox",
                value: data.nickname,
                class: "checkbox"
              });
            } else if (elementClicked == "graphic") {
              this.alertDialogChoiceGraphic();
            }
          }
        }
      ]
    });
    alert.present();
  }

  alertDialogChoiceGraphic() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Select a type of chart for drag and drop");

    alert.addInput({
      type: "radio",
      label: "Pie chart",
      value: "piechart",
      checked: true
    });

    alert.addInput({
      type: "radio",
      label: "Bar chart",
      value: "barchart"
    });

    alert.addInput({
      type: "radio",
      label: "Histogram",
      value: "histogram"
    });

    /*alert.addInput({
      type: "radio",
      label: "Table chart",
      value: "tablechart"
    });*/

    alert.addButton("Cancel");
    alert.addButton({
      text: "Ok",
      handler: (data: any) => {
        console.log("Radio data:", data);
        if (data == "piechart") {
          this.pieChart();
        }

        if (data == "barchart") {
          this.barChart();
        }

        if (data == "histogram") {
          this.histogramChart();
        }

        if (data == "tablechart") {
          //this.tableChart();
        }
      }
    });

    alert.present();
  }

  changeStateOfButton() {
    if (!this.flag_of_lock) { //False, we have to lock the page
      this.ios = "ios-lock";
      this.md = "md-lock";
      this.flag_of_lock = true;
    } else { //True, we have to unlock the page
      this.ios = "ios-unlock";
      this.md = "md-unlock";
      this.flag_of_lock = false;
    }
  }

  alertDialogChoice() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Select a component for drag and drop");

    alert.addInput({
      type: "radio",
      label: "Button",
      value: "button",
      checked: true
    });

    alert.addInput({
      type: "radio",
      label: "Checkbox",
      value: "checkbox"
    });

    /*alert.addInput({
      type: "radio",
      label: "ListView",
      value: "listview"
    });*/

    alert.addInput({
      type: "radio",
      label: "Graphic",
      value: "graphic"
    });

    alert.addButton("Cancel");
    alert.addButton({
      text: "Ok",
      handler: (data: any) => {
        console.log("Radio data:", data);

        if (data == "graphic") this.alertDialogChoiceGraphic();
        else this.addElementClicked(data);
      }
    });

    alert.present();
  }
}

/*tableChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Name");
    data.addColumn("number", "Salary");
    data.addColumn("boolean", "Full Time Employee");
    data.addRows([
      ["Mike", { v: 10000, f: "$10,000" }, true],
      ["Jim", { v: 8000, f: "$8,000" }, false],
      ["Alice", { v: 12500, f: "$12,500" }, true],
      ["Bob", { v: 7000, f: "$7,000" }, true]
    ]);

    var table = new google.visualization.Table(
      document.getElementById("chart_div")
    );

    table.draw(data, { showRowNumber: true, width: "100%", height: "100%" });
  }
  */
