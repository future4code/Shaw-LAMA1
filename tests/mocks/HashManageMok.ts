export class HashGeneratorMock {
    public hash = async (s:string): Promise<any> =>{ 
       return "hash"
    }

    public compareHashMock = async(s:string, hash: string):Promise<boolean> => {
       return s === hash
    }
}