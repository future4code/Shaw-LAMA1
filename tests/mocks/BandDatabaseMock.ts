import Band from "../../src/model/Band"
import { bandMock } from "./BandMocks"

export class BandDataBaseMocks {

  public async insertBandMock(band: Band){ }

  public async selectNameBandMock(name: string) {
    return bandMock
  }

  public async selectBandByIdMock(id: string) {
    return bandMock
  }
}