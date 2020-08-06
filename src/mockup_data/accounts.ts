export interface Account {
  username: string
  password: string
}

const akunGuru: Account = {
  username: 'guru',
  password: 'guru',
}

const akunKurik: Account = {
  username: 'kurikulum',
  password: 'kurikulum',
}

const akunSuper: Account = {
  username: 'supervisor',
  password: 'supervisor',
}

const akunKepsek: Account = {
  username: 'kepsek',
  password: 'kepsek',
}

export { akunGuru, akunSuper, akunKurik, akunKepsek }
