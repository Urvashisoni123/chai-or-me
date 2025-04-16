class Apierror extends Error {
    constructor(message = "something went wrong",
        statusCode,
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.mess = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constuctor)
        }
}
}
export {Apierror}
