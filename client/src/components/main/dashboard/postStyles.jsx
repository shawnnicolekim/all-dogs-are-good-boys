import styled from 'styled-components';

// GENERAL WRAPPER //
export const Wrapper = styled.div`
  border: 2px solid black
`;

// CREATE POST FORM //
export const CreatePostFormWrapper = styled(Wrapper)`
  color: pink
`;

// POST LIST //
export const PostListWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  border-color: blue;
  margin: 5px
`;

// POST ENTRY //
export const PostEntryWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "header ."
    "caption caption"
    "image image"
    "postbar postbar";
  border-color: red;
`;

export const PostCaption = styled(PostEntryWrapper)`
  grid-area: caption;
  border-color: green;
`;

export const PostImage = styled(PostEntryWrapper)`
  grid-area: image;
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: center;
  border-color: yellow;
`;

export const PostHeader = styled(PostEntryWrapper)`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "avatar username"
    "avatar timestamp";
  border-color: blue;
`;

export const HeaderAvatar = styled(PostHeader)`
  grid-area: avatar;
  background-image: url(${props => props.avatar});
  background-repeat: no-repeat;
  object-fit: contain;
  border-color: pink;
`;

export const HeaderUsername = styled(PostHeader)`
  grid-area: username;
  border-color: pink;
`;

export const HeaderTimestamp = styled(PostHeader)`
  grid-area: timestamp;
  border-color: pink;
`;

// POST BAR //
export const PostBar = styled(PostEntryWrapper)`
  grid-area: postbar;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

// SPOTLIGHT //
export const Spotlight = styled(Wrapper)`
`;
