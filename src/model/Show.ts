export default class Show {
    constructor(
        private id: string,
        private week_day: string,
        private start_time: string,
        private end_time: string,
        private band_id: string
    ) { }

    public getId() {
        return this.id
    }

    public getWeek_day() {
        return this.week_day
    }
    public getStartTime() {
        return this.start_time
    }
    public getEnd_time() {
        return this.end_time
    }
    public getBand_id() {
        return this.band_id
    }
} 