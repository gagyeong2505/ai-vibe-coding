/**
 * PageContainer 컴포넌트 - 전체 페이지 기본 래퍼
 *
 * Props:
 * @param {node} children - 내부 컨텐츠 [Required]
 * @param {object} sx - 추가 sx 스타일 [Optional, 기본값: {}]
 *
 * Example usage:
 * <PageContainer><YourContent /></PageContainer>
 */
import Box from '@mui/material/Box';

function PageContainer({ children, sx = {} }) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F5F0E8',
        ...sx,
      }}
    >
      { children }
    </Box>
  );
}

export default PageContainer;
