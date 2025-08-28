import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventDto {
    @IsNumber()
    id :number;
    
    @IsString()
    @IsNotEmpty()
    title :string;
    
     @IsString()
     @IsOptional()
    description:string;
    
    
     @IsString()
     @IsNotEmpty()
    location :string;
    
    @IsNumber()
    date:number;
    
    
    isPublic :boolean;
    
      //RELAÇÃO
      @IsNumber()
    createdBy :number

@IsOptional()
@IsDateString()
    createdAt : number;
}