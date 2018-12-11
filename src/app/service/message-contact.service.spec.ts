import { TestBed } from '@angular/core/testing';

import { MessageContactService } from './message-contact.service';

describe('MessageContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageContactService = TestBed.get(MessageContactService);
    expect(service).toBeTruthy();
  });
});
