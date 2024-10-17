/* eslint-disable react/prop-types */
import { getImageUrl } from "../utils/utils1";

export default function Profile({
  name,
  imageId,
  size,
  profession,
  awards,
  discovery,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img src={getImageUrl(imageId)} alt={name} width={size} height={size} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards.count} ({awards.names.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}
