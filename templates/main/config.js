var base=require('../../config')

module.exports=Object.assign(base,{
    name:"main",
    parameters:{
        "AssetBucket":base.templateBucket,
        "AssetPrefix":base.templatePrefix,
        "VPCConfiguration":"ExternalVPC",
        "VPCID":"vpc-09832e025bc21b87e",
        "VPCSubnets":"subn,subnet-090930421177b009e"
    }
})
