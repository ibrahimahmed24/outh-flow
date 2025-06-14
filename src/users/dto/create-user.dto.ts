import{ IsEmail, IsOptional, IsString, MinLength ,Matches} from "class-validator";

export class CreateUserDto {
     @IsEmail({},{ message: 'please entet a valid emali address' })
     emali:string

  
     @IsString({ message: 'please enter a valid password' })
     @MinLength(6, { message: 'password must be at least 6 characters long' })
     @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
          message:
     'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        })
     password:string

      @IsOptional()
      @IsString({ message: 'please enter a valid username' })
      @MinLength(6, { message: 'first name  must be at least 6 characters long' })
      firstname?:string

     @IsOptional({ message: 'last name  must be at least 6 characters long' })
     @IsString({ message: 'please enter a valid username' })
     @MinLength(6, { message: 'last name  must be at least 6 characters long' })
     lastname?:string



}
