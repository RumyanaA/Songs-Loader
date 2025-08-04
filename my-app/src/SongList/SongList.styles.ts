import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  width: 500px;
  max-height: fit-content;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 20px;
`;

export const SongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-height: 500px;
`;

export const SongItem = styled.li`
  padding: 16px 20px;
  margin: 10px;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: background 0.2s ease;

  &:hover {
    background: #edf2f7;
  }
`;

export const SongLine = styled.p`
  margin: 4px 0;
  font-size: 16px;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
