import { body } from 'express-validator';

export const movieCreateValidation = () => {
    return [
        body("title")
        .isString()
        .notEmpty()
        .withMessage("The title is required!")
        .isLength({min:5})
        .withMessage("The title should be 5 characters"),
        body("rating")
        .isNumeric()
        .withMessage("The rating should be number!")
        .custom((value:number) => {
            if(value < 0 || value > 10){
                throw new Error("The rating should be a number beteween 0 and 10")
            }
            return true
        }),
        body("description")
        .isString()
        .notEmpty()
        .withMessage("The description is required!"),
        
        body("director")
        .isString()
        .notEmpty()
        .withMessage("The director is required!"),
        body("poster")
        .isURL()
        .optional()
        .withMessage("The poster should be url!")

        
    ]
}