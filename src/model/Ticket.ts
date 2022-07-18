export default class Ticket {
    constructor(
        private event_id: string,
        private ticket_name: string,
        private ticket_value: number,
        private amount_ticket: number,
        private tickets_sold: number
    ) { }

    public getEvent_id() {
        return this.event_id
    }

    public getTicket_name() {
        return this.ticket_name
    }
    public getStartTime() {
        return this.ticket_value
    }
    public getAamount_ticket() {
        return this.amount_ticket
    }

    public getTickets_sold() {
        return this.tickets_sold
    }
} 