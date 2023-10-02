// Element welche für die Eingabe der Zeilenanzahl zuständig ist
var inputRows = document.getElementById("rowCount");

//Element, welches eine Referenz zu der Tabelle darstellt
var passworCard = document.getElementById("passwordCard");

//String für die Zufallsgeneration der Zeichen
const characters =
  "qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM12345678901234567890123456789012345678901234567890*ç%&/()='?^`¦@#°§¬|¢è!éà£,;.:-_][{}¨?^`¦@#°§¬|¢è!éà£";

// Funktion, für die Generierung der Tabelle
function generateTable() {
  //Tabelle löschen
  clearTable();
  //Eingabe der Zeilenanzahl auslesen
  var inputValue = inputRows.value;

  //Die Kopfzeile erstellen
  generateHeaderColumn();

  //For loop für jede Reihe der Tabelle, die Anzahl wird aus der Eingabe ausgelesen
  for (let rowNumber = 0; rowNumber < inputValue; rowNumber++) {
    const row = document.createElement("tr"); //neue Zeitele erstellen
    generateRowIndex(rowNumber, row); // ReihenIndex erstellen, mitgabe des ReihenIndex und der aktuellen Reihe

    //For Loop für jede Spalte der Tabelle, 26 Spalten wegen 26 Buchstaben im Alphabet
    for (let col = 0; col < 26; col++) {
      const cell = document.createElement("td"); //neue Zelle erstellen
      const cellText = document.createTextNode(generateCellText()); // neuer Text für die Zelle erstellen, mit zufallsgeneriertem Zeichen

      cell.appendChild(cellText); //den Text der Zelle hinzufügen
      row.appendChild(cell); //die Zelle der Reihe hinzufügen
    }
    passworCard.appendChild(row); //die Reihe in die Tabelle passworCard hinzufügen
  }
}

// Funktion, für die Generierung der Kopfzeile
function generateHeaderColumn() {
  const row = document.createElement("tr"); //neue Reihe erstellen
  const cell = document.createElement("th"); //leere Zelle erstellen, um Platz für den Reihen zu haben
  row.appendChild(cell); //leere Zeile der Reihe hinzufügen

  //For Loop für jede Spalte der Tabelle, mit ASCII Code von A bis Z, um die Buchstaben zu generieren
  for (let col = 65; col <= 90; col++) {
    const cell = document.createElement("th"); //neue Titelzelle erstellen
    const cellText = document.createTextNode(String.fromCharCode(col)); //neuer Text für die Zelle erstellen, mit dem ASCII Code

    cell.appendChild(cellText); //den Text der Titelzelle hinzufügen
    row.appendChild(cell); //die Zelle der Reihe hinzufügen
    passworCard.appendChild(row); //die Reihe in die Tabelle passworCard hinzufügen
  }
}

// Funktion, für die Generierung des ReihenIndex, Parameter für den Index und die Reihe
function generateRowIndex(index, row) {
  const cell = document.createElement("th"); //neue Titelzelle erstellen
  const cellText = document.createTextNode(index + 1); //neuer Text für die Zelle erstellen, mit dem Index + 1, da der Index bei 0 beginnt

  cell.appendChild(cellText); //den Text der Titelzelle hinzufügen
  row.appendChild(cell); //die Zelle der Reihe hinzufügen
}

// Funktion, für die Generierung des Zufallsgenerierten Zeichens, mit Rückgabe eines Zeichens aus dem String characters
function generateCellText() {
  const index = Math.floor(Math.random() * characters.length); //Zufallszahl zwischen 0 und der Länge des Strings characters

  //Rückgabe eines Zufalls Zeichen aus dem String characters
  return characters.charAt(index);
}

// Funktion, für das Löschen der Tabelle
function clearTable() {
  passworCard.innerHTML = ""; //Den Inhalt der Tabelle passworCard löschen
}

// Funktion, für das Drucken der Tabelle
function printPDF() {
  window.print(); //Fenster drucken, als ob man ctrl + p drückt
}
