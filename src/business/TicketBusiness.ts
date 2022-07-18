import { CustomError } from "../error/CustomError";
import Ticket from "../model/Ticket";
import { Authenticator } from "../services/Authenticator";
import { TicketInputDTO } from "../types/TicketInputDTO";

export default class TicketBussines {
    constructor(
        private authenticator: Authenticator,
    ){}
    createTicket = async (ticket:TicketInputDTO, token:string, event_id:string) => {

        if (!token) {
            throw new CustomError(401,'Not authorized')
        }

        const authenticatorRole = this.authenticator.getData(token)

        if(authenticatorRole.role !== "ADMIN"){

            throw new CustomError(406,'Invalid values')
        }

        const { ticket_name, ticket_value, amount_ticket} = ticket

        if (!ticket_name || !ticket_value || !amount_ticket) {
            throw new CustomError(406,'Fill in the fields, please')
        }

        if (ticket_name !== String(ticket_name) || ticket_value !== Number(ticket_value) || amount_ticket !== Number(amount_ticket)) {
            throw new CustomError(406,'Invalid values')
        }

        const tickets_sold = 0

        const modelTicket = new Ticket(
            event_id,
            ticket_name,
            ticket_value,
            amount_ticket,
            tickets_sold
        )
}
}