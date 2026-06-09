// await schema.parseASync(req.body) is the line where you use ZOD to validate the reques
// body data against the defined schema.


// .parse for synchronous
// Given any Zod schema, you can call its `.parse' method to check `data` is
// valid. If it is, a value is required with full type information! Otherwise, an
// error is thrown.

//`.parseAsycn(data:unknown):Promise

//If you use asynchronous [refinements](https://github.com/colinhacks/zod#refine)
// or [transforms](https://github.com/colinhacks/zod#transform) (more on those 
// later), you'll need to use `.parseAsync`.

export const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message ="Fill the input detail properly";
        const extraDetails= err.issues[0].message;

        const error = {
            status,
            message,
            extraDetails
        }
        // const message = err.issues[0].message;
        // console.log(message);
        // res.status(400).json({message:message});

        console.log(error);
        next(error);
        
    }

}
