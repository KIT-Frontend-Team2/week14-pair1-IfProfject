import * as IssuesAPI from './apis/issues.api'
import { setupWorker } from 'msw'

const handler = [...Object.values(IssuesAPI)]
export const worker = setupWorker(...handler)
