import { Role } from './role';

export interface Employee {
    mntEmpId: string;
    empNameEn: string;
    empNameAr: string;
    empGprNo: string;
    isActive: boolean;
    empCode: string;
    modifiedDate: Date;
    empEmail: string;
    empTelNo: string;
    enabled: boolean;
    roles: Role[];
}
