import {type I_Config} from './types/config.ts'

export const config:I_Config = {
    app: {
      title: import.meta.env.VITE_APP_TITLE ?? 'Title',
    }
    
};