import {Deserializable} from "./deserializable.model";

export class result implements Deserializable {
    collectionName: string;
    artistName: string;
    collectionViewUrl: any;
    artworkUrl100: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
  }