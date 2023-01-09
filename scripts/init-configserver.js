rs.initiate({_id: "rs-config-server", configsvr: true, version: 1, members: [ { _id: 0, host : 'cfg1:27017' }, { _id: 1, host : 'cfg2:27017' }, { _id: 2, host : 'cfg3:27017' } ] })
