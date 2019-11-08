var base=require('../../config')

module.exports=Object.assign(base,{
    name:"main",
    parameters:{
        "AssetBucket":base.templateBucket,
        "AssetPrefix":base.templatePrefix,
        "VPCConfiguration":"ExternalVPC",
        "VPCID":"vpc-09832e025bc21b87e",
        "VPCSubnets":"subnet-0cdd2d9f3d8e009e6,subnet-0e3c5f6401a304cdf"
    }
})
