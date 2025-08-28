import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAttendeeDto {
    @IsNumber()
    id: number

    @IsString()
    userId: string; // (FK → User)


    eventId: string //(FK → Event)


    status: string; // ('going' | 'interested' | 'declined')

    @IsOptional()
    @IsDateString()
    createdAt: number;
}