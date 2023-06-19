import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyInput } from './dtos/create-company.input';
import { PrismaService } from '../users/services/prima.service';
import { FindCompaniesByDateInput } from './dtos/find-companies-by-date.input';
import { CreateClassInput } from './dtos/create-class.input';
import { FindAllClassesInput } from './dtos/find-classes.input';
import { BookClassInput } from './dtos/book-class.input';
import { FindCompanyByPartnerIdInput } from './dtos/find-company-by-id.input';
import { FindNextClientClassInput } from './dtos/find-next-client-class.input';
import { CancelClientClassInput } from './dtos/cancel-client-class.input';
import { CompanyRepository } from 'src/repositories/company.repository';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { ClassRepository } from 'src/repositories/class.repository';
import { ClientRepository } from 'src/repositories/client.repository';

@Injectable()
export class CompanyService {
  constructor(
    private prisma: PrismaService, 
    private companyRepository: CompanyRepository,
    private partnerRepository: PartnerRepository,
    private classRepository: ClassRepository,
    private clientRepository: ClientRepository
  ) {}

  async create({ name, availableDay, bannerImage, partnerId }: CreateCompanyInput) {

    const partner = await this.partnerRepository.findOneById({id: partnerId});

    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyRepository.create({
      name,availableDay, bannerImage, partnerId,
    })

    return company;
  }

  async findAll() {
    const companies = await this.companyRepository.findAll();
    return companies;
  }

  async findByPartnerId({ partnerId }: FindCompanyByPartnerIdInput) {

    const partner = await this.partnerRepository.findOneById({id: partnerId});
    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyRepository.findByPartnerId({partnerId})
    return company;
  }

  async findByDate({ date, partnerId }: FindCompaniesByDateInput) {
    const partner = await this.partnerRepository.findOneById({id: partnerId});
    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyRepository.findByDate({
      date, partnerId
    });
    return company;
  }

  ///### CLASSES ###

  async createClass(data : CreateClassInput){

    const company = await this.companyRepository.findOneById(data.companyId);

    if(!company){
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    const classFound = await this.classRepository.createClass(data)

    return classFound;
  }

  async findAllClasses({ companyId, date }: FindAllClassesInput){
    const classes = await this.classRepository.findAllClasses({companyId, date});
    return classes;

  }

  async bookClass({ classId, clientId }: BookClassInput) {

    console.log("BOOK CLASS CALLED!");
    const classFound = await this.classRepository.findClassById(classId);
    const client = await this.clientRepository.findOne(clientId);
    console.log(" ### CLASS ###")
    console.log(classFound);
    console.log("########################################")
    console.log(" ### CLIENT ###")
    console.log(client);

    if(!classFound || !client){
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    const classBooked = await this.classRepository.bookClass({classId, clientId});
    return classBooked;
  }

  async findNextClientClass({ clientId }: FindNextClientClassInput){

    const client = await this.clientRepository.findOne(clientId);

    if(!client){
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const classFound = await this.classRepository.findNextClientClass({clientId});
    return classFound;
  }

  async cancelClass({classId, clientId }: CancelClientClassInput) {

    const client = await this.clientRepository.findOne(clientId);
    const classFound = await this.classRepository.findClassById(classId);
    if(!client || !classFound){
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const classCanceled = await this.classRepository.cancelClass({classId, clientId});
    return classCanceled;
  }
}
