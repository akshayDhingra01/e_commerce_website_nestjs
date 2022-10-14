import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

// import { Role } from 'src/auth/enums/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({required: true})
  name: string;


  @Prop({unique: true , index: true , require : true}) // , default : "aksh@gmail.com"})
  email: string;

//   @Prop({unique: true , sparse:true , index: true , require : true})

  @Prop() //{default : "he"}
  password: string;

  
  @Prop({ default: false})  //requried : true
  isAdmmin: boolean;

  
  @Prop({enum: ['BUYER' , 'SELLER'] }) //, required: true
  type: string;


//   @Prop()
//   roles: Role[];

}

export const UserSchema = SchemaFactory.createForClass(User);
