import { ModalBaseService } from "./modal-base.service";
export declare class AtModalService {
    private base_modal_service;
    constructor(base_modal_service: ModalBaseService);
    modal(config?: any): void;
    success(config: any): void;
    error(config: any): void;
    warning(config: any): void;
    info(config: any): void;
    confirm(config: any): void;
    setConfirm(config: any): void;
}
