export type MovieBigCardProps = {
  id: string;
  url: string;
  isFront: boolean;
  handleReject: (id: string) => void;
  handleLike: (id: string) => void;
};
