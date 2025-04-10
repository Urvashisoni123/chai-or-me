class Apierror extends Error {
    constructor(message = "something went wrong",
        statusCode,
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.mess = message
        this.success = false;
        this.errors = errors

        if(statck){
            this.statck = statck
        }else{
            Error.captureStackTrace(this,this.constuctor)
        }
}
}
export {Apierror}