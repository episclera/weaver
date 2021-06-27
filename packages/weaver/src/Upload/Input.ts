import { Upload } from 'antd'

/**
 * Just a re-export under a different name for Upload component
 * needed because antd uses Classes for top level components but we want to avoid
 * that in this repo because is a useless approach
 */
const Input = Upload

export default Input
