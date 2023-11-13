import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

// material-ui
import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';

// assets
import MainCard from '../../components/MainCard';

// validation schema
const schema = z.object({
  userName: z.string().startsWith('@', { message: 'ユーザー名は@から始まる必要があります' }),
  displayName: z
    .string()
    .min(1, { message: '表示名はアカウントを区別するためにXで使用してる名前にしてください。' }),
  loginProvider: z.enum(['Google', 'Apple', 'メールアドレス', '電話番号', 'ユーザー名'], {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errorMap: (issue, ctx) => ({ message: 'ログイン方法を指定してください。' }),
  }),
  loginProviderId: z
    .string()
    .min(5, { message: 'ログイン方法に応じたログインIDを入力してください。' }),
  loginProviderPassword: z
    .string()
    .min(5, { message: 'ログイン方法に応じたパスワードを入力してください。' }),
  remark: z.string().min(1).or(z.literal('')),
});

export type XAccoutEditorDataType = z.infer<typeof schema>;

const defaultValues: XAccoutEditorDataType = {
  userName: '',
  displayName: '',
  loginProvider: 'Google',
  loginProviderId: '',
  loginProviderPassword: '',
  remark: '',
};

// ==============================|| FORMS VALIDATION - ADDRESS ||============================== //
const loginProviders = [
  { label: 'Google', value: 'Google' },
  { label: 'Apple', value: 'Apple' },
  { label: 'メールアドレス', value: 'メールアドレス' },
  { label: '電話番号', value: '電話番号' },
  { label: 'ユーザー名', value: 'ユーザー名' },
];

const XAccountEditor = () => {
  // const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: XAccoutEditorDataType) => {
    reset(defaultValues);
  };

  return (
    <MainCard title="Google Map Autocomplete (Address)">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3.5}>
          <Grid item xs={12}>
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="userName"
                  label="ユーザー名"
                  error={!!errors.userName}
                  helperText={errors.userName && errors.userName.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="displayName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="displayName"
                  label="表示名"
                  error={!!errors.displayName}
                  helperText={errors.displayName && errors.displayName.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="loginProvider"
              defaultValue="Google"
              render={({ field: { ref, onChange, ...field } }) => (
                <Autocomplete
                  options={loginProviders}
                  getOptionLabel={(option) => option.label}
                  onChange={(_, data) => onChange(data)}
                  defaultValue={{ label: 'Google', value: 'Google' }}
                  renderInput={(params) => (
                    <TextField
                      {...field}
                      inputRef={ref}
                      {...params}
                      InputLabelProps={{ shrink: true }}
                      label="ログイン方法"
                      fullWidth
                    />
                  )}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="loginProviderId"
                  label="ログインID"
                  error={!!errors.loginProviderId}
                  helperText={errors.loginProviderId && errors.loginProviderId.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="displayName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="loginProviderPassword"
                  label="パスワード"
                  error={!!errors.loginProviderPassword}
                  helperText={errors.loginProviderPassword && errors.loginProviderPassword.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="remark"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  id="remark"
                  label="備考"
                  error={!!errors.remark}
                  helperText={errors.remark && errors.remark.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
              <Button variant="contained" type="submit">
                登録
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default XAccountEditor;
