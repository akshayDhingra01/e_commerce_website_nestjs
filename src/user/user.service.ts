import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {

    const newUser = await this.userModel.create(createUserDTO);

    console.log(newUser);





    let salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash('ali', salt)


    let letBcrypt = async function() {

        let salt = await bcrypt.genSalt(10)
        console.log('salt:',salt)
        const hashedPassword = await bcrypt.hash('ali', salt)
        console.log(hashedPassword);
        
        if(!hashedPassword ){
        // something went wrong
          console.log('something went wrong')
        } else {
         // successful
          console.log('hsashedPass:',hashedPassword)
        }
          
        }
        
    letBcrypt();
          





    console.log(newUser.email, newUser.password);

    const hashedPassword = await bcrypt.hash(newUser.password, salt)

    console.log(hashedPassword);
    
    newUser.password = await bcrypt.hash(newUser.password, 10);
    console.log(newUser);
    
    return newUser.save();
  }

  async findUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({username: username});
    return user;
  }
}







