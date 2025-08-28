import { Module } from '@nestjs/common';
import { AttendeeController } from '../controller/attendee.controller';
import { AttendeeService } from '../service/attendee.service';

@Module({
  controllers: [AttendeeController],
  providers: [AttendeeService]
})
export class AttendeeModule {}
