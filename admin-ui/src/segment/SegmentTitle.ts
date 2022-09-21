import { Segment as TSegment } from "../api/segment/Segment";

export const SEGMENT_TITLE_FIELD = "filename";

export const SegmentTitle = (record: TSegment): string => {
  return record.filename || record.id;
};
