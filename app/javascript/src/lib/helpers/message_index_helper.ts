import {ref, Ref} from '@vue/composition-api'

export type MessageFilterCondition =
  | "tip"
  | "keyword"
  | "allMessages"
  | "mentions";

