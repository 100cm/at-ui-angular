import { AtMessageContainerService } from "./at-message-container.service";
export declare class AtMessageService {
    private message_container_service;
    constructor(message_container_service: AtMessageContainerService);
    success(options?: {}): void;
    info(options?: {}): void;
    show(options?: {}): void;
    warning(options?: {}): void;
    error(options?: {}): void;
    loading(options: any): void;
}
