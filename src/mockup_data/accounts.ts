export type Roles = 'guru' | 'kurikulum' | 'supervisor' | 'kepsek' | undefined

export interface Account {
  username: string
  password: string
  role: Roles
}

const akunGuru: Account = {
  username: 'guru',
  password: 'guru',
  role: 'guru',
}

const akunKurik: Account = {
  username: 'kurikulum',
  password: 'kurikulum',
  role: 'kurikulum',
}

const akunSuper: Account = {
  username: 'supervisor',
  password: 'supervisor',
  role: 'supervisor',
}

const akunKepsek: Account = {
  username: 'kepsek',
  password: 'kepsek',
  role: 'kepsek',
}

const accounts: Account[] = [akunGuru, akunKepsek, akunKurik, akunSuper]

export { accounts }
