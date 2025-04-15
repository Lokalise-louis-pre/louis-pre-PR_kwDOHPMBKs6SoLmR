import { KeyboardEventHandler } from '../../../node_modules/react';
import { EventKeys } from '../ts';
export type EventKeyMap = Partial<Record<EventKeys, KeyboardEventHandler>>;
export * from './context';
