const tblTicket = document.getElementById("tblTicket")
const createdTickets = JSON.parse(sessionStorage.getItem("createdTickets"));

function ticketTable(tickets){
    let cellCount = 0
    let rowCount = tblTicket.rows.length
    let row = tblTicket.insertRow(rowCount)
    row.id = tickets.ticketId

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = `Film: ${tickets.screening.movie.title}`

    cell = row.insertCell(cellCount++)
    cell.innerHTML = `Dato: ${tickets.screening.date} Tid: ${tickets.screening.timeOfDay}`

    cell = row.insertCell(cellCount++)
    cell.innerHTML = `Sal: ${tickets.screening.cinema.name}`

    cell = row.insertCell(cellCount++)
    cell.innerHTML = `Række: ${tickets.seat.rowNr} Sæde: ${tickets.seat.seatNr}`

    cell = row.insertCell(cellCount++)
    cell.innerHTML = `Gæst: ${tickets.customerName}`

    cell = row.insertCell(cellCount++)
    cell.innerHTML = `Pris: ${tickets.seat.price}`
}

function actionGetTickets() {
    createdTickets.forEach(ticketTable)
}

document.addEventListener("DOMContentLoaded", actionGetTickets)
