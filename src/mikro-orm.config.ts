import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as Path from 'path';

const config : Options = {
    entities : [ 'dist/**/*.entity.js' ],
    entitiesTs : [ 'src/**/*.entity.ts' ],
    metadataProvider : TsMorphMetadataProvider,
    migrations : {
        path : Path.join( __dirname, './_database/migrations' ),
        glob : '!(*.d).{js,ts}',
        disableForeignKeys: false
    },
    seeder : {
        path : 'src/_database/seeders',
        defaultSeeder : 'DatabaseSeeder'
    },
    // schemaGenerator: {
	// 	disableForeignKeys: false, // try to disable foreign_key_checks (or equivalent) // prevents error permission denied to set parameter "session_replication_role"
	// 	createForeignKeyConstraints: true, // do not generate FK constraints
	// },
}

export default config;