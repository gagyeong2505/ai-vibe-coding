/**
 * InfoList 컴포넌트 - 수상/경력/자격사항 등 항목 목록 섹션
 *
 * Props:
 * @param {string} title - 섹션 제목 [Required]
 * @param {Array} items - 렌더링할 항목 배열 [Required]
 * @param {function} renderItem - 각 항목 렌더링 함수 (item, index) => node [Required]
 *
 * Example usage:
 * <InfoList title="수상" items={awards} renderItem={(item) => <div>{item.title}</div>} />
 */
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function InfoList({ title, items, renderItem }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        backgroundColor: '#EDE8DF',
        borderRadius: '12px',
        border: '1px solid #C4A96B',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          fontWeight: 600,
          color: '#1E2B3C',
          mb: 2,
          fontSize: '1rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        { title }
      </Typography>
      <Stack spacing={2}>
        { items.map((item, index) => renderItem(item, index)) }
      </Stack>
    </Paper>
  );
}

export default InfoList;
