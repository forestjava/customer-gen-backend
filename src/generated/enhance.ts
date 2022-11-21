import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  UserRole: crudResolvers.UserRoleCrudResolver,
  UserGroup: crudResolvers.UserGroupCrudResolver,
  Company: crudResolvers.CompanyCrudResolver,
  Region: crudResolvers.RegionCrudResolver,
  Solution: crudResolvers.SolutionCrudResolver,
  Formation: crudResolvers.FormationCrudResolver,
  Zone: crudResolvers.ZoneCrudResolver,
  Device: crudResolvers.DeviceCrudResolver,
  DeviceType: crudResolvers.DeviceTypeCrudResolver,
  Alert: crudResolvers.AlertCrudResolver,
  Priority: crudResolvers.PriorityCrudResolver,
  Event: crudResolvers.EventCrudResolver,
  SmartPole: crudResolvers.SmartPoleCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  UserRole: {
    aggregateUserRole: actionResolvers.AggregateUserRoleResolver,
    createManyUserRole: actionResolvers.CreateManyUserRoleResolver,
    createOneUserRole: actionResolvers.CreateOneUserRoleResolver,
    deleteManyUserRole: actionResolvers.DeleteManyUserRoleResolver,
    deleteOneUserRole: actionResolvers.DeleteOneUserRoleResolver,
    findFirstUserRole: actionResolvers.FindFirstUserRoleResolver,
    userRoles: actionResolvers.FindManyUserRoleResolver,
    userRole: actionResolvers.FindUniqueUserRoleResolver,
    groupByUserRole: actionResolvers.GroupByUserRoleResolver,
    updateManyUserRole: actionResolvers.UpdateManyUserRoleResolver,
    updateOneUserRole: actionResolvers.UpdateOneUserRoleResolver,
    upsertOneUserRole: actionResolvers.UpsertOneUserRoleResolver
  },
  UserGroup: {
    aggregateUserGroup: actionResolvers.AggregateUserGroupResolver,
    createManyUserGroup: actionResolvers.CreateManyUserGroupResolver,
    createOneUserGroup: actionResolvers.CreateOneUserGroupResolver,
    deleteManyUserGroup: actionResolvers.DeleteManyUserGroupResolver,
    deleteOneUserGroup: actionResolvers.DeleteOneUserGroupResolver,
    findFirstUserGroup: actionResolvers.FindFirstUserGroupResolver,
    userGroups: actionResolvers.FindManyUserGroupResolver,
    userGroup: actionResolvers.FindUniqueUserGroupResolver,
    groupByUserGroup: actionResolvers.GroupByUserGroupResolver,
    updateManyUserGroup: actionResolvers.UpdateManyUserGroupResolver,
    updateOneUserGroup: actionResolvers.UpdateOneUserGroupResolver,
    upsertOneUserGroup: actionResolvers.UpsertOneUserGroupResolver
  },
  Company: {
    aggregateCompany: actionResolvers.AggregateCompanyResolver,
    createManyCompany: actionResolvers.CreateManyCompanyResolver,
    createOneCompany: actionResolvers.CreateOneCompanyResolver,
    deleteManyCompany: actionResolvers.DeleteManyCompanyResolver,
    deleteOneCompany: actionResolvers.DeleteOneCompanyResolver,
    findFirstCompany: actionResolvers.FindFirstCompanyResolver,
    companies: actionResolvers.FindManyCompanyResolver,
    company: actionResolvers.FindUniqueCompanyResolver,
    groupByCompany: actionResolvers.GroupByCompanyResolver,
    updateManyCompany: actionResolvers.UpdateManyCompanyResolver,
    updateOneCompany: actionResolvers.UpdateOneCompanyResolver,
    upsertOneCompany: actionResolvers.UpsertOneCompanyResolver
  },
  Region: {
    aggregateRegion: actionResolvers.AggregateRegionResolver,
    createManyRegion: actionResolvers.CreateManyRegionResolver,
    createOneRegion: actionResolvers.CreateOneRegionResolver,
    deleteManyRegion: actionResolvers.DeleteManyRegionResolver,
    deleteOneRegion: actionResolvers.DeleteOneRegionResolver,
    findFirstRegion: actionResolvers.FindFirstRegionResolver,
    regions: actionResolvers.FindManyRegionResolver,
    region: actionResolvers.FindUniqueRegionResolver,
    groupByRegion: actionResolvers.GroupByRegionResolver,
    updateManyRegion: actionResolvers.UpdateManyRegionResolver,
    updateOneRegion: actionResolvers.UpdateOneRegionResolver,
    upsertOneRegion: actionResolvers.UpsertOneRegionResolver
  },
  Solution: {
    aggregateSolution: actionResolvers.AggregateSolutionResolver,
    createManySolution: actionResolvers.CreateManySolutionResolver,
    createOneSolution: actionResolvers.CreateOneSolutionResolver,
    deleteManySolution: actionResolvers.DeleteManySolutionResolver,
    deleteOneSolution: actionResolvers.DeleteOneSolutionResolver,
    findFirstSolution: actionResolvers.FindFirstSolutionResolver,
    solutions: actionResolvers.FindManySolutionResolver,
    solution: actionResolvers.FindUniqueSolutionResolver,
    groupBySolution: actionResolvers.GroupBySolutionResolver,
    updateManySolution: actionResolvers.UpdateManySolutionResolver,
    updateOneSolution: actionResolvers.UpdateOneSolutionResolver,
    upsertOneSolution: actionResolvers.UpsertOneSolutionResolver
  },
  Formation: {
    aggregateFormation: actionResolvers.AggregateFormationResolver,
    createManyFormation: actionResolvers.CreateManyFormationResolver,
    createOneFormation: actionResolvers.CreateOneFormationResolver,
    deleteManyFormation: actionResolvers.DeleteManyFormationResolver,
    deleteOneFormation: actionResolvers.DeleteOneFormationResolver,
    findFirstFormation: actionResolvers.FindFirstFormationResolver,
    formations: actionResolvers.FindManyFormationResolver,
    formation: actionResolvers.FindUniqueFormationResolver,
    groupByFormation: actionResolvers.GroupByFormationResolver,
    updateManyFormation: actionResolvers.UpdateManyFormationResolver,
    updateOneFormation: actionResolvers.UpdateOneFormationResolver,
    upsertOneFormation: actionResolvers.UpsertOneFormationResolver
  },
  Zone: {
    aggregateZone: actionResolvers.AggregateZoneResolver,
    createManyZone: actionResolvers.CreateManyZoneResolver,
    createOneZone: actionResolvers.CreateOneZoneResolver,
    deleteManyZone: actionResolvers.DeleteManyZoneResolver,
    deleteOneZone: actionResolvers.DeleteOneZoneResolver,
    findFirstZone: actionResolvers.FindFirstZoneResolver,
    zones: actionResolvers.FindManyZoneResolver,
    zone: actionResolvers.FindUniqueZoneResolver,
    groupByZone: actionResolvers.GroupByZoneResolver,
    updateManyZone: actionResolvers.UpdateManyZoneResolver,
    updateOneZone: actionResolvers.UpdateOneZoneResolver,
    upsertOneZone: actionResolvers.UpsertOneZoneResolver
  },
  Device: {
    aggregateDevice: actionResolvers.AggregateDeviceResolver,
    createManyDevice: actionResolvers.CreateManyDeviceResolver,
    createOneDevice: actionResolvers.CreateOneDeviceResolver,
    deleteManyDevice: actionResolvers.DeleteManyDeviceResolver,
    deleteOneDevice: actionResolvers.DeleteOneDeviceResolver,
    findFirstDevice: actionResolvers.FindFirstDeviceResolver,
    devices: actionResolvers.FindManyDeviceResolver,
    device: actionResolvers.FindUniqueDeviceResolver,
    groupByDevice: actionResolvers.GroupByDeviceResolver,
    updateManyDevice: actionResolvers.UpdateManyDeviceResolver,
    updateOneDevice: actionResolvers.UpdateOneDeviceResolver,
    upsertOneDevice: actionResolvers.UpsertOneDeviceResolver
  },
  DeviceType: {
    aggregateDeviceType: actionResolvers.AggregateDeviceTypeResolver,
    createManyDeviceType: actionResolvers.CreateManyDeviceTypeResolver,
    createOneDeviceType: actionResolvers.CreateOneDeviceTypeResolver,
    deleteManyDeviceType: actionResolvers.DeleteManyDeviceTypeResolver,
    deleteOneDeviceType: actionResolvers.DeleteOneDeviceTypeResolver,
    findFirstDeviceType: actionResolvers.FindFirstDeviceTypeResolver,
    deviceTypes: actionResolvers.FindManyDeviceTypeResolver,
    deviceType: actionResolvers.FindUniqueDeviceTypeResolver,
    groupByDeviceType: actionResolvers.GroupByDeviceTypeResolver,
    updateManyDeviceType: actionResolvers.UpdateManyDeviceTypeResolver,
    updateOneDeviceType: actionResolvers.UpdateOneDeviceTypeResolver,
    upsertOneDeviceType: actionResolvers.UpsertOneDeviceTypeResolver
  },
  Alert: {
    aggregateAlert: actionResolvers.AggregateAlertResolver,
    createManyAlert: actionResolvers.CreateManyAlertResolver,
    createOneAlert: actionResolvers.CreateOneAlertResolver,
    deleteManyAlert: actionResolvers.DeleteManyAlertResolver,
    deleteOneAlert: actionResolvers.DeleteOneAlertResolver,
    findFirstAlert: actionResolvers.FindFirstAlertResolver,
    alerts: actionResolvers.FindManyAlertResolver,
    alert: actionResolvers.FindUniqueAlertResolver,
    groupByAlert: actionResolvers.GroupByAlertResolver,
    updateManyAlert: actionResolvers.UpdateManyAlertResolver,
    updateOneAlert: actionResolvers.UpdateOneAlertResolver,
    upsertOneAlert: actionResolvers.UpsertOneAlertResolver
  },
  Priority: {
    aggregatePriority: actionResolvers.AggregatePriorityResolver,
    createManyPriority: actionResolvers.CreateManyPriorityResolver,
    createOnePriority: actionResolvers.CreateOnePriorityResolver,
    deleteManyPriority: actionResolvers.DeleteManyPriorityResolver,
    deleteOnePriority: actionResolvers.DeleteOnePriorityResolver,
    findFirstPriority: actionResolvers.FindFirstPriorityResolver,
    priorities: actionResolvers.FindManyPriorityResolver,
    priority: actionResolvers.FindUniquePriorityResolver,
    groupByPriority: actionResolvers.GroupByPriorityResolver,
    updateManyPriority: actionResolvers.UpdateManyPriorityResolver,
    updateOnePriority: actionResolvers.UpdateOnePriorityResolver,
    upsertOnePriority: actionResolvers.UpsertOnePriorityResolver
  },
  Event: {
    aggregateEvent: actionResolvers.AggregateEventResolver,
    createManyEvent: actionResolvers.CreateManyEventResolver,
    createOneEvent: actionResolvers.CreateOneEventResolver,
    deleteManyEvent: actionResolvers.DeleteManyEventResolver,
    deleteOneEvent: actionResolvers.DeleteOneEventResolver,
    findFirstEvent: actionResolvers.FindFirstEventResolver,
    events: actionResolvers.FindManyEventResolver,
    event: actionResolvers.FindUniqueEventResolver,
    groupByEvent: actionResolvers.GroupByEventResolver,
    updateManyEvent: actionResolvers.UpdateManyEventResolver,
    updateOneEvent: actionResolvers.UpdateOneEventResolver,
    upsertOneEvent: actionResolvers.UpsertOneEventResolver
  },
  SmartPole: {
    aggregateSmartPole: actionResolvers.AggregateSmartPoleResolver,
    createManySmartPole: actionResolvers.CreateManySmartPoleResolver,
    createOneSmartPole: actionResolvers.CreateOneSmartPoleResolver,
    deleteManySmartPole: actionResolvers.DeleteManySmartPoleResolver,
    deleteOneSmartPole: actionResolvers.DeleteOneSmartPoleResolver,
    findFirstSmartPole: actionResolvers.FindFirstSmartPoleResolver,
    smartPoles: actionResolvers.FindManySmartPoleResolver,
    smartPole: actionResolvers.FindUniqueSmartPoleResolver,
    groupBySmartPole: actionResolvers.GroupBySmartPoleResolver,
    updateManySmartPole: actionResolvers.UpdateManySmartPoleResolver,
    updateOneSmartPole: actionResolvers.UpdateOneSmartPoleResolver,
    upsertOneSmartPole: actionResolvers.UpsertOneSmartPoleResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  UserRole: ["aggregateUserRole", "createManyUserRole", "createOneUserRole", "deleteManyUserRole", "deleteOneUserRole", "findFirstUserRole", "userRoles", "userRole", "groupByUserRole", "updateManyUserRole", "updateOneUserRole", "upsertOneUserRole"],
  UserGroup: ["aggregateUserGroup", "createManyUserGroup", "createOneUserGroup", "deleteManyUserGroup", "deleteOneUserGroup", "findFirstUserGroup", "userGroups", "userGroup", "groupByUserGroup", "updateManyUserGroup", "updateOneUserGroup", "upsertOneUserGroup"],
  Company: ["aggregateCompany", "createManyCompany", "createOneCompany", "deleteManyCompany", "deleteOneCompany", "findFirstCompany", "companies", "company", "groupByCompany", "updateManyCompany", "updateOneCompany", "upsertOneCompany"],
  Region: ["aggregateRegion", "createManyRegion", "createOneRegion", "deleteManyRegion", "deleteOneRegion", "findFirstRegion", "regions", "region", "groupByRegion", "updateManyRegion", "updateOneRegion", "upsertOneRegion"],
  Solution: ["aggregateSolution", "createManySolution", "createOneSolution", "deleteManySolution", "deleteOneSolution", "findFirstSolution", "solutions", "solution", "groupBySolution", "updateManySolution", "updateOneSolution", "upsertOneSolution"],
  Formation: ["aggregateFormation", "createManyFormation", "createOneFormation", "deleteManyFormation", "deleteOneFormation", "findFirstFormation", "formations", "formation", "groupByFormation", "updateManyFormation", "updateOneFormation", "upsertOneFormation"],
  Zone: ["aggregateZone", "createManyZone", "createOneZone", "deleteManyZone", "deleteOneZone", "findFirstZone", "zones", "zone", "groupByZone", "updateManyZone", "updateOneZone", "upsertOneZone"],
  Device: ["aggregateDevice", "createManyDevice", "createOneDevice", "deleteManyDevice", "deleteOneDevice", "findFirstDevice", "devices", "device", "groupByDevice", "updateManyDevice", "updateOneDevice", "upsertOneDevice"],
  DeviceType: ["aggregateDeviceType", "createManyDeviceType", "createOneDeviceType", "deleteManyDeviceType", "deleteOneDeviceType", "findFirstDeviceType", "deviceTypes", "deviceType", "groupByDeviceType", "updateManyDeviceType", "updateOneDeviceType", "upsertOneDeviceType"],
  Alert: ["aggregateAlert", "createManyAlert", "createOneAlert", "deleteManyAlert", "deleteOneAlert", "findFirstAlert", "alerts", "alert", "groupByAlert", "updateManyAlert", "updateOneAlert", "upsertOneAlert"],
  Priority: ["aggregatePriority", "createManyPriority", "createOnePriority", "deleteManyPriority", "deleteOnePriority", "findFirstPriority", "priorities", "priority", "groupByPriority", "updateManyPriority", "updateOnePriority", "upsertOnePriority"],
  Event: ["aggregateEvent", "createManyEvent", "createOneEvent", "deleteManyEvent", "deleteOneEvent", "findFirstEvent", "events", "event", "groupByEvent", "updateManyEvent", "updateOneEvent", "upsertOneEvent"],
  SmartPole: ["aggregateSmartPole", "createManySmartPole", "createOneSmartPole", "deleteManySmartPole", "deleteOneSmartPole", "findFirstSmartPole", "smartPoles", "smartPole", "groupBySmartPole", "updateManySmartPole", "updateOneSmartPole", "upsertOneSmartPole"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateUserRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserRoleArgs: ["data", "skipDuplicates"],
  CreateOneUserRoleArgs: ["data"],
  DeleteManyUserRoleArgs: ["where"],
  DeleteOneUserRoleArgs: ["where"],
  FindFirstUserRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserRoleArgs: ["where"],
  GroupByUserRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserRoleArgs: ["data", "where"],
  UpdateOneUserRoleArgs: ["data", "where"],
  UpsertOneUserRoleArgs: ["where", "create", "update"],
  AggregateUserGroupArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserGroupArgs: ["data", "skipDuplicates"],
  CreateOneUserGroupArgs: ["data"],
  DeleteManyUserGroupArgs: ["where"],
  DeleteOneUserGroupArgs: ["where"],
  FindFirstUserGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserGroupArgs: ["where"],
  GroupByUserGroupArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserGroupArgs: ["data", "where"],
  UpdateOneUserGroupArgs: ["data", "where"],
  UpsertOneUserGroupArgs: ["where", "create", "update"],
  AggregateCompanyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCompanyArgs: ["data", "skipDuplicates"],
  CreateOneCompanyArgs: ["data"],
  DeleteManyCompanyArgs: ["where"],
  DeleteOneCompanyArgs: ["where"],
  FindFirstCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCompanyArgs: ["where"],
  GroupByCompanyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCompanyArgs: ["data", "where"],
  UpdateOneCompanyArgs: ["data", "where"],
  UpsertOneCompanyArgs: ["where", "create", "update"],
  AggregateRegionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRegionArgs: ["data", "skipDuplicates"],
  CreateOneRegionArgs: ["data"],
  DeleteManyRegionArgs: ["where"],
  DeleteOneRegionArgs: ["where"],
  FindFirstRegionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRegionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRegionArgs: ["where"],
  GroupByRegionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRegionArgs: ["data", "where"],
  UpdateOneRegionArgs: ["data", "where"],
  UpsertOneRegionArgs: ["where", "create", "update"],
  AggregateSolutionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySolutionArgs: ["data", "skipDuplicates"],
  CreateOneSolutionArgs: ["data"],
  DeleteManySolutionArgs: ["where"],
  DeleteOneSolutionArgs: ["where"],
  FindFirstSolutionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySolutionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSolutionArgs: ["where"],
  GroupBySolutionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySolutionArgs: ["data", "where"],
  UpdateOneSolutionArgs: ["data", "where"],
  UpsertOneSolutionArgs: ["where", "create", "update"],
  AggregateFormationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFormationArgs: ["data", "skipDuplicates"],
  CreateOneFormationArgs: ["data"],
  DeleteManyFormationArgs: ["where"],
  DeleteOneFormationArgs: ["where"],
  FindFirstFormationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFormationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFormationArgs: ["where"],
  GroupByFormationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFormationArgs: ["data", "where"],
  UpdateOneFormationArgs: ["data", "where"],
  UpsertOneFormationArgs: ["where", "create", "update"],
  AggregateZoneArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyZoneArgs: ["data", "skipDuplicates"],
  CreateOneZoneArgs: ["data"],
  DeleteManyZoneArgs: ["where"],
  DeleteOneZoneArgs: ["where"],
  FindFirstZoneArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyZoneArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueZoneArgs: ["where"],
  GroupByZoneArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyZoneArgs: ["data", "where"],
  UpdateOneZoneArgs: ["data", "where"],
  UpsertOneZoneArgs: ["where", "create", "update"],
  AggregateDeviceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyDeviceArgs: ["data", "skipDuplicates"],
  CreateOneDeviceArgs: ["data"],
  DeleteManyDeviceArgs: ["where"],
  DeleteOneDeviceArgs: ["where"],
  FindFirstDeviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDeviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueDeviceArgs: ["where"],
  GroupByDeviceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyDeviceArgs: ["data", "where"],
  UpdateOneDeviceArgs: ["data", "where"],
  UpsertOneDeviceArgs: ["where", "create", "update"],
  AggregateDeviceTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyDeviceTypeArgs: ["data", "skipDuplicates"],
  CreateOneDeviceTypeArgs: ["data"],
  DeleteManyDeviceTypeArgs: ["where"],
  DeleteOneDeviceTypeArgs: ["where"],
  FindFirstDeviceTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDeviceTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueDeviceTypeArgs: ["where"],
  GroupByDeviceTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyDeviceTypeArgs: ["data", "where"],
  UpdateOneDeviceTypeArgs: ["data", "where"],
  UpsertOneDeviceTypeArgs: ["where", "create", "update"],
  AggregateAlertArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAlertArgs: ["data", "skipDuplicates"],
  CreateOneAlertArgs: ["data"],
  DeleteManyAlertArgs: ["where"],
  DeleteOneAlertArgs: ["where"],
  FindFirstAlertArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAlertArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAlertArgs: ["where"],
  GroupByAlertArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAlertArgs: ["data", "where"],
  UpdateOneAlertArgs: ["data", "where"],
  UpsertOneAlertArgs: ["where", "create", "update"],
  AggregatePriorityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPriorityArgs: ["data", "skipDuplicates"],
  CreateOnePriorityArgs: ["data"],
  DeleteManyPriorityArgs: ["where"],
  DeleteOnePriorityArgs: ["where"],
  FindFirstPriorityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPriorityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePriorityArgs: ["where"],
  GroupByPriorityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPriorityArgs: ["data", "where"],
  UpdateOnePriorityArgs: ["data", "where"],
  UpsertOnePriorityArgs: ["where", "create", "update"],
  AggregateEventArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEventArgs: ["data", "skipDuplicates"],
  CreateOneEventArgs: ["data"],
  DeleteManyEventArgs: ["where"],
  DeleteOneEventArgs: ["where"],
  FindFirstEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEventArgs: ["where"],
  GroupByEventArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEventArgs: ["data", "where"],
  UpdateOneEventArgs: ["data", "where"],
  UpsertOneEventArgs: ["where", "create", "update"],
  AggregateSmartPoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySmartPoleArgs: ["data", "skipDuplicates"],
  CreateOneSmartPoleArgs: ["data"],
  DeleteManySmartPoleArgs: ["where"],
  DeleteOneSmartPoleArgs: ["where"],
  FindFirstSmartPoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySmartPoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSmartPoleArgs: ["where"],
  GroupBySmartPoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySmartPoleArgs: ["data", "where"],
  UpdateOneSmartPoleArgs: ["data", "where"],
  UpsertOneSmartPoleArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  UserRole: relationResolvers.UserRoleRelationsResolver,
  UserGroup: relationResolvers.UserGroupRelationsResolver,
  Company: relationResolvers.CompanyRelationsResolver,
  Region: relationResolvers.RegionRelationsResolver,
  Solution: relationResolvers.SolutionRelationsResolver,
  Formation: relationResolvers.FormationRelationsResolver,
  Zone: relationResolvers.ZoneRelationsResolver,
  Device: relationResolvers.DeviceRelationsResolver,
  DeviceType: relationResolvers.DeviceTypeRelationsResolver,
  Alert: relationResolvers.AlertRelationsResolver,
  Priority: relationResolvers.PriorityRelationsResolver,
  Event: relationResolvers.EventRelationsResolver,
  SmartPole: relationResolvers.SmartPoleRelationsResolver
};
const relationResolversInfo = {
  User: ["role", "groups"],
  UserRole: ["users"],
  UserGroup: ["users"],
  Company: ["regions"],
  Region: ["formations", "company"],
  Solution: ["formations"],
  Formation: ["solutions", "zones", "region"],
  Zone: ["formation", "smartPoles"],
  Device: ["type", "alerts", "events", "smartPole"],
  DeviceType: ["devices"],
  Alert: ["priority", "device"],
  Priority: ["alerts", "events"],
  Event: ["priority", "device"],
  SmartPole: ["zone", "devices"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserRole: ["id", "name"],
  UserGroup: ["id", "name", "description", "color"],
  Company: ["id", "name", "icon", "logo"],
  Region: ["id", "name", "companyId"],
  Solution: ["id", "name"],
  Formation: ["id", "name", "address", "regionId"],
  Zone: ["id", "name", "formationId"],
  Device: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceType: ["id", "name"],
  Alert: ["id", "priorityId", "deviceId", "message"],
  Priority: ["id", "name"],
  Event: ["id", "priorityId", "moment", "message", "deviceId"],
  SmartPole: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserRole: ["_count", "_avg", "_sum", "_min", "_max"],
  UserRoleGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserGroup: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupGroupBy: ["id", "name", "description", "color", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCompany: ["_count", "_avg", "_sum", "_min", "_max"],
  CompanyGroupBy: ["id", "name", "icon", "logo", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRegion: ["_count", "_avg", "_sum", "_min", "_max"],
  RegionGroupBy: ["id", "name", "companyId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSolution: ["_count", "_avg", "_sum", "_min", "_max"],
  SolutionGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFormation: ["_count", "_avg", "_sum", "_min", "_max"],
  FormationGroupBy: ["id", "name", "address", "regionId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateZone: ["_count", "_avg", "_sum", "_min", "_max"],
  ZoneGroupBy: ["id", "name", "formationId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateDevice: ["_count", "_avg", "_sum", "_min", "_max"],
  DeviceGroupBy: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateDeviceType: ["_count", "_avg", "_sum", "_min", "_max"],
  DeviceTypeGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAlert: ["_count", "_avg", "_sum", "_min", "_max"],
  AlertGroupBy: ["id", "priorityId", "deviceId", "message", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePriority: ["_count", "_avg", "_sum", "_min", "_max"],
  PriorityGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEvent: ["_count", "_avg", "_sum", "_min", "_max"],
  EventGroupBy: ["id", "priorityId", "moment", "message", "deviceId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSmartPole: ["_count", "_avg", "_sum", "_min", "_max"],
  SmartPoleGroupBy: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["groups"],
  UserCountAggregate: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle", "_all"],
  UserAvgAggregate: ["id", "roleId"],
  UserSumAggregate: ["id", "roleId"],
  UserMinAggregate: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserMaxAggregate: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserRoleCount: ["users"],
  UserRoleCountAggregate: ["id", "name", "_all"],
  UserRoleAvgAggregate: ["id"],
  UserRoleSumAggregate: ["id"],
  UserRoleMinAggregate: ["id", "name"],
  UserRoleMaxAggregate: ["id", "name"],
  UserGroupCount: ["users"],
  UserGroupCountAggregate: ["id", "name", "description", "color", "_all"],
  UserGroupAvgAggregate: ["id"],
  UserGroupSumAggregate: ["id"],
  UserGroupMinAggregate: ["id", "name", "description", "color"],
  UserGroupMaxAggregate: ["id", "name", "description", "color"],
  CompanyCount: ["regions"],
  CompanyCountAggregate: ["id", "name", "icon", "logo", "_all"],
  CompanyAvgAggregate: ["id"],
  CompanySumAggregate: ["id"],
  CompanyMinAggregate: ["id", "name", "icon", "logo"],
  CompanyMaxAggregate: ["id", "name", "icon", "logo"],
  RegionCount: ["formations"],
  RegionCountAggregate: ["id", "name", "companyId", "_all"],
  RegionAvgAggregate: ["id", "companyId"],
  RegionSumAggregate: ["id", "companyId"],
  RegionMinAggregate: ["id", "name", "companyId"],
  RegionMaxAggregate: ["id", "name", "companyId"],
  SolutionCount: ["formations"],
  SolutionCountAggregate: ["id", "name", "_all"],
  SolutionAvgAggregate: ["id"],
  SolutionSumAggregate: ["id"],
  SolutionMinAggregate: ["id", "name"],
  SolutionMaxAggregate: ["id", "name"],
  FormationCount: ["solutions", "zones"],
  FormationCountAggregate: ["id", "name", "address", "regionId", "_all"],
  FormationAvgAggregate: ["id", "regionId"],
  FormationSumAggregate: ["id", "regionId"],
  FormationMinAggregate: ["id", "name", "address", "regionId"],
  FormationMaxAggregate: ["id", "name", "address", "regionId"],
  ZoneCount: ["smartPoles"],
  ZoneCountAggregate: ["id", "name", "formationId", "_all"],
  ZoneAvgAggregate: ["id", "formationId"],
  ZoneSumAggregate: ["id", "formationId"],
  ZoneMinAggregate: ["id", "name", "formationId"],
  ZoneMaxAggregate: ["id", "name", "formationId"],
  DeviceCount: ["alerts", "events"],
  DeviceCountAggregate: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId", "_all"],
  DeviceAvgAggregate: ["id", "typeId", "smartPoleId"],
  DeviceSumAggregate: ["id", "typeId", "smartPoleId"],
  DeviceMinAggregate: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceMaxAggregate: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceTypeCount: ["devices"],
  DeviceTypeCountAggregate: ["id", "name", "_all"],
  DeviceTypeAvgAggregate: ["id"],
  DeviceTypeSumAggregate: ["id"],
  DeviceTypeMinAggregate: ["id", "name"],
  DeviceTypeMaxAggregate: ["id", "name"],
  AlertCountAggregate: ["id", "priorityId", "deviceId", "message", "_all"],
  AlertAvgAggregate: ["id", "priorityId", "deviceId"],
  AlertSumAggregate: ["id", "priorityId", "deviceId"],
  AlertMinAggregate: ["id", "priorityId", "deviceId", "message"],
  AlertMaxAggregate: ["id", "priorityId", "deviceId", "message"],
  PriorityCount: ["alerts", "events"],
  PriorityCountAggregate: ["id", "name", "_all"],
  PriorityAvgAggregate: ["id"],
  PrioritySumAggregate: ["id"],
  PriorityMinAggregate: ["id", "name"],
  PriorityMaxAggregate: ["id", "name"],
  EventCountAggregate: ["id", "priorityId", "moment", "message", "deviceId", "_all"],
  EventAvgAggregate: ["id", "priorityId", "deviceId"],
  EventSumAggregate: ["id", "priorityId", "deviceId"],
  EventMinAggregate: ["id", "priorityId", "moment", "message", "deviceId"],
  EventMaxAggregate: ["id", "priorityId", "moment", "message", "deviceId"],
  SmartPoleCount: ["devices"],
  SmartPoleCountAggregate: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId", "_all"],
  SmartPoleAvgAggregate: ["id", "connectLocationId", "latitude", "longitude", "zoneId"],
  SmartPoleSumAggregate: ["id", "connectLocationId", "latitude", "longitude", "zoneId"],
  SmartPoleMinAggregate: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"],
  SmartPoleMaxAggregate: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "lastName", "firstName", "email", "roleId", "role", "groups", "username", "avatar", "phone", "jobTitle"],
  UserOrderByWithRelationInput: ["id", "lastName", "firstName", "email", "roleId", "role", "groups", "username", "avatar", "phone", "jobTitle"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserRoleWhereInput: ["AND", "OR", "NOT", "id", "users", "name"],
  UserRoleOrderByWithRelationInput: ["id", "users", "name"],
  UserRoleWhereUniqueInput: ["id"],
  UserRoleOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  UserRoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  UserGroupWhereInput: ["AND", "OR", "NOT", "id", "users", "name", "description", "color"],
  UserGroupOrderByWithRelationInput: ["id", "users", "name", "description", "color"],
  UserGroupWhereUniqueInput: ["id"],
  UserGroupOrderByWithAggregationInput: ["id", "name", "description", "color", "_count", "_avg", "_max", "_min", "_sum"],
  UserGroupScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "color"],
  CompanyWhereInput: ["AND", "OR", "NOT", "id", "name", "icon", "logo", "regions"],
  CompanyOrderByWithRelationInput: ["id", "name", "icon", "logo", "regions"],
  CompanyWhereUniqueInput: ["id"],
  CompanyOrderByWithAggregationInput: ["id", "name", "icon", "logo", "_count", "_avg", "_max", "_min", "_sum"],
  CompanyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "icon", "logo"],
  RegionWhereInput: ["AND", "OR", "NOT", "id", "name", "formations", "companyId", "company"],
  RegionOrderByWithRelationInput: ["id", "name", "formations", "companyId", "company"],
  RegionWhereUniqueInput: ["id"],
  RegionOrderByWithAggregationInput: ["id", "name", "companyId", "_count", "_avg", "_max", "_min", "_sum"],
  RegionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "companyId"],
  SolutionWhereInput: ["AND", "OR", "NOT", "id", "name", "formations"],
  SolutionOrderByWithRelationInput: ["id", "name", "formations"],
  SolutionWhereUniqueInput: ["id"],
  SolutionOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  SolutionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  FormationWhereInput: ["AND", "OR", "NOT", "id", "name", "address", "solutions", "zones", "regionId", "region"],
  FormationOrderByWithRelationInput: ["id", "name", "address", "solutions", "zones", "regionId", "region"],
  FormationWhereUniqueInput: ["id"],
  FormationOrderByWithAggregationInput: ["id", "name", "address", "regionId", "_count", "_avg", "_max", "_min", "_sum"],
  FormationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "address", "regionId"],
  ZoneWhereInput: ["AND", "OR", "NOT", "id", "name", "formationId", "formation", "smartPoles"],
  ZoneOrderByWithRelationInput: ["id", "name", "formationId", "formation", "smartPoles"],
  ZoneWhereUniqueInput: ["id"],
  ZoneOrderByWithAggregationInput: ["id", "name", "formationId", "_count", "_avg", "_max", "_min", "_sum"],
  ZoneScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "formationId"],
  DeviceWhereInput: ["AND", "OR", "NOT", "id", "name", "serial", "uuid", "typeId", "type", "connectParamIndex", "alerts", "events", "smartPoleId", "smartPole"],
  DeviceOrderByWithRelationInput: ["id", "name", "serial", "uuid", "typeId", "type", "connectParamIndex", "alerts", "events", "smartPoleId", "smartPole"],
  DeviceWhereUniqueInput: ["id"],
  DeviceOrderByWithAggregationInput: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId", "_count", "_avg", "_max", "_min", "_sum"],
  DeviceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceTypeWhereInput: ["AND", "OR", "NOT", "id", "name", "devices"],
  DeviceTypeOrderByWithRelationInput: ["id", "name", "devices"],
  DeviceTypeWhereUniqueInput: ["id"],
  DeviceTypeOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  DeviceTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  AlertWhereInput: ["AND", "OR", "NOT", "id", "priorityId", "priority", "deviceId", "device", "message"],
  AlertOrderByWithRelationInput: ["id", "priorityId", "priority", "deviceId", "device", "message"],
  AlertWhereUniqueInput: ["id"],
  AlertOrderByWithAggregationInput: ["id", "priorityId", "deviceId", "message", "_count", "_avg", "_max", "_min", "_sum"],
  AlertScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "priorityId", "deviceId", "message"],
  PriorityWhereInput: ["AND", "OR", "NOT", "id", "name", "alerts", "events"],
  PriorityOrderByWithRelationInput: ["id", "name", "alerts", "events"],
  PriorityWhereUniqueInput: ["id"],
  PriorityOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  PriorityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  EventWhereInput: ["AND", "OR", "NOT", "id", "priorityId", "priority", "moment", "message", "deviceId", "device"],
  EventOrderByWithRelationInput: ["id", "priorityId", "priority", "moment", "message", "deviceId", "device"],
  EventWhereUniqueInput: ["id"],
  EventOrderByWithAggregationInput: ["id", "priorityId", "moment", "message", "deviceId", "_count", "_avg", "_max", "_min", "_sum"],
  EventScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "priorityId", "moment", "message", "deviceId"],
  SmartPoleWhereInput: ["AND", "OR", "NOT", "id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId", "zone", "devices"],
  SmartPoleOrderByWithRelationInput: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId", "zone", "devices"],
  SmartPoleWhereUniqueInput: ["id"],
  SmartPoleOrderByWithAggregationInput: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId", "_count", "_avg", "_max", "_min", "_sum"],
  SmartPoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"],
  UserCreateInput: ["lastName", "firstName", "email", "role", "groups", "username", "avatar", "phone", "jobTitle"],
  UserUpdateInput: ["lastName", "firstName", "email", "role", "groups", "username", "avatar", "phone", "jobTitle"],
  UserCreateManyInput: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserUpdateManyMutationInput: ["lastName", "firstName", "email", "username", "avatar", "phone", "jobTitle"],
  UserRoleCreateInput: ["users", "name"],
  UserRoleUpdateInput: ["users", "name"],
  UserRoleCreateManyInput: ["id", "name"],
  UserRoleUpdateManyMutationInput: ["name"],
  UserGroupCreateInput: ["users", "name", "description", "color"],
  UserGroupUpdateInput: ["users", "name", "description", "color"],
  UserGroupCreateManyInput: ["id", "name", "description", "color"],
  UserGroupUpdateManyMutationInput: ["name", "description", "color"],
  CompanyCreateInput: ["name", "icon", "logo", "regions"],
  CompanyUpdateInput: ["name", "icon", "logo", "regions"],
  CompanyCreateManyInput: ["id", "name", "icon", "logo"],
  CompanyUpdateManyMutationInput: ["name", "icon", "logo"],
  RegionCreateInput: ["name", "formations", "company"],
  RegionUpdateInput: ["name", "formations", "company"],
  RegionCreateManyInput: ["id", "name", "companyId"],
  RegionUpdateManyMutationInput: ["name"],
  SolutionCreateInput: ["name", "formations"],
  SolutionUpdateInput: ["name", "formations"],
  SolutionCreateManyInput: ["id", "name"],
  SolutionUpdateManyMutationInput: ["name"],
  FormationCreateInput: ["name", "address", "solutions", "zones", "region"],
  FormationUpdateInput: ["name", "address", "solutions", "zones", "region"],
  FormationCreateManyInput: ["id", "name", "address", "regionId"],
  FormationUpdateManyMutationInput: ["name", "address"],
  ZoneCreateInput: ["name", "formation", "smartPoles"],
  ZoneUpdateInput: ["name", "formation", "smartPoles"],
  ZoneCreateManyInput: ["id", "name", "formationId"],
  ZoneUpdateManyMutationInput: ["name"],
  DeviceCreateInput: ["name", "serial", "uuid", "type", "connectParamIndex", "alerts", "events", "smartPole"],
  DeviceUpdateInput: ["name", "serial", "uuid", "type", "connectParamIndex", "alerts", "events", "smartPole"],
  DeviceCreateManyInput: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceUpdateManyMutationInput: ["name", "serial", "uuid", "connectParamIndex"],
  DeviceTypeCreateInput: ["name", "devices"],
  DeviceTypeUpdateInput: ["name", "devices"],
  DeviceTypeCreateManyInput: ["id", "name"],
  DeviceTypeUpdateManyMutationInput: ["name"],
  AlertCreateInput: ["priority", "device", "message"],
  AlertUpdateInput: ["priority", "device", "message"],
  AlertCreateManyInput: ["id", "priorityId", "deviceId", "message"],
  AlertUpdateManyMutationInput: ["message"],
  PriorityCreateInput: ["name", "alerts", "events"],
  PriorityUpdateInput: ["name", "alerts", "events"],
  PriorityCreateManyInput: ["id", "name"],
  PriorityUpdateManyMutationInput: ["name"],
  EventCreateInput: ["priority", "moment", "message", "device"],
  EventUpdateInput: ["priority", "moment", "message", "device"],
  EventCreateManyInput: ["id", "priorityId", "moment", "message", "deviceId"],
  EventUpdateManyMutationInput: ["moment", "message"],
  SmartPoleCreateInput: ["connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zone", "devices"],
  SmartPoleUpdateInput: ["connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zone", "devices"],
  SmartPoleCreateManyInput: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"],
  SmartPoleUpdateManyMutationInput: ["connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRoleRelationFilter: ["is", "isNot"],
  UserGroupListRelationFilter: ["every", "some", "none"],
  UserGroupOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserAvgOrderByAggregateInput: ["id", "roleId"],
  UserMaxOrderByAggregateInput: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserMinOrderByAggregateInput: ["id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserSumOrderByAggregateInput: ["id", "roleId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  UserRoleCountOrderByAggregateInput: ["id", "name"],
  UserRoleAvgOrderByAggregateInput: ["id"],
  UserRoleMaxOrderByAggregateInput: ["id", "name"],
  UserRoleMinOrderByAggregateInput: ["id", "name"],
  UserRoleSumOrderByAggregateInput: ["id"],
  UserGroupCountOrderByAggregateInput: ["id", "name", "description", "color"],
  UserGroupAvgOrderByAggregateInput: ["id"],
  UserGroupMaxOrderByAggregateInput: ["id", "name", "description", "color"],
  UserGroupMinOrderByAggregateInput: ["id", "name", "description", "color"],
  UserGroupSumOrderByAggregateInput: ["id"],
  RegionListRelationFilter: ["every", "some", "none"],
  RegionOrderByRelationAggregateInput: ["_count"],
  CompanyCountOrderByAggregateInput: ["id", "name", "icon", "logo"],
  CompanyAvgOrderByAggregateInput: ["id"],
  CompanyMaxOrderByAggregateInput: ["id", "name", "icon", "logo"],
  CompanyMinOrderByAggregateInput: ["id", "name", "icon", "logo"],
  CompanySumOrderByAggregateInput: ["id"],
  FormationListRelationFilter: ["every", "some", "none"],
  CompanyRelationFilter: ["is", "isNot"],
  FormationOrderByRelationAggregateInput: ["_count"],
  RegionCountOrderByAggregateInput: ["id", "name", "companyId"],
  RegionAvgOrderByAggregateInput: ["id", "companyId"],
  RegionMaxOrderByAggregateInput: ["id", "name", "companyId"],
  RegionMinOrderByAggregateInput: ["id", "name", "companyId"],
  RegionSumOrderByAggregateInput: ["id", "companyId"],
  SolutionCountOrderByAggregateInput: ["id", "name"],
  SolutionAvgOrderByAggregateInput: ["id"],
  SolutionMaxOrderByAggregateInput: ["id", "name"],
  SolutionMinOrderByAggregateInput: ["id", "name"],
  SolutionSumOrderByAggregateInput: ["id"],
  SolutionListRelationFilter: ["every", "some", "none"],
  ZoneListRelationFilter: ["every", "some", "none"],
  RegionRelationFilter: ["is", "isNot"],
  SolutionOrderByRelationAggregateInput: ["_count"],
  ZoneOrderByRelationAggregateInput: ["_count"],
  FormationCountOrderByAggregateInput: ["id", "name", "address", "regionId"],
  FormationAvgOrderByAggregateInput: ["id", "regionId"],
  FormationMaxOrderByAggregateInput: ["id", "name", "address", "regionId"],
  FormationMinOrderByAggregateInput: ["id", "name", "address", "regionId"],
  FormationSumOrderByAggregateInput: ["id", "regionId"],
  FormationRelationFilter: ["is", "isNot"],
  SmartPoleListRelationFilter: ["every", "some", "none"],
  SmartPoleOrderByRelationAggregateInput: ["_count"],
  ZoneCountOrderByAggregateInput: ["id", "name", "formationId"],
  ZoneAvgOrderByAggregateInput: ["id", "formationId"],
  ZoneMaxOrderByAggregateInput: ["id", "name", "formationId"],
  ZoneMinOrderByAggregateInput: ["id", "name", "formationId"],
  ZoneSumOrderByAggregateInput: ["id", "formationId"],
  DeviceTypeRelationFilter: ["is", "isNot"],
  AlertListRelationFilter: ["every", "some", "none"],
  EventListRelationFilter: ["every", "some", "none"],
  SmartPoleRelationFilter: ["is", "isNot"],
  AlertOrderByRelationAggregateInput: ["_count"],
  EventOrderByRelationAggregateInput: ["_count"],
  DeviceCountOrderByAggregateInput: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceAvgOrderByAggregateInput: ["id", "typeId", "smartPoleId"],
  DeviceMaxOrderByAggregateInput: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceMinOrderByAggregateInput: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  DeviceSumOrderByAggregateInput: ["id", "typeId", "smartPoleId"],
  DeviceListRelationFilter: ["every", "some", "none"],
  DeviceOrderByRelationAggregateInput: ["_count"],
  DeviceTypeCountOrderByAggregateInput: ["id", "name"],
  DeviceTypeAvgOrderByAggregateInput: ["id"],
  DeviceTypeMaxOrderByAggregateInput: ["id", "name"],
  DeviceTypeMinOrderByAggregateInput: ["id", "name"],
  DeviceTypeSumOrderByAggregateInput: ["id"],
  PriorityRelationFilter: ["is", "isNot"],
  DeviceRelationFilter: ["is", "isNot"],
  AlertCountOrderByAggregateInput: ["id", "priorityId", "deviceId", "message"],
  AlertAvgOrderByAggregateInput: ["id", "priorityId", "deviceId"],
  AlertMaxOrderByAggregateInput: ["id", "priorityId", "deviceId", "message"],
  AlertMinOrderByAggregateInput: ["id", "priorityId", "deviceId", "message"],
  AlertSumOrderByAggregateInput: ["id", "priorityId", "deviceId"],
  PriorityCountOrderByAggregateInput: ["id", "name"],
  PriorityAvgOrderByAggregateInput: ["id"],
  PriorityMaxOrderByAggregateInput: ["id", "name"],
  PriorityMinOrderByAggregateInput: ["id", "name"],
  PrioritySumOrderByAggregateInput: ["id"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EventCountOrderByAggregateInput: ["id", "priorityId", "moment", "message", "deviceId"],
  EventAvgOrderByAggregateInput: ["id", "priorityId", "deviceId"],
  EventMaxOrderByAggregateInput: ["id", "priorityId", "moment", "message", "deviceId"],
  EventMinOrderByAggregateInput: ["id", "priorityId", "moment", "message", "deviceId"],
  EventSumOrderByAggregateInput: ["id", "priorityId", "deviceId"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ZoneRelationFilter: ["is", "isNot"],
  SmartPoleCountOrderByAggregateInput: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"],
  SmartPoleAvgOrderByAggregateInput: ["id", "connectLocationId", "latitude", "longitude", "zoneId"],
  SmartPoleMaxOrderByAggregateInput: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"],
  SmartPoleMinOrderByAggregateInput: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"],
  SmartPoleSumOrderByAggregateInput: ["id", "connectLocationId", "latitude", "longitude", "zoneId"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserRoleCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  UserGroupCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserRoleUpdateOneWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserGroupUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateManyWithoutRoleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutGroupsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateManyWithoutGroupsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RegionCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "createMany", "connect"],
  RegionUpdateManyWithoutCompanyNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FormationCreateNestedManyWithoutRegionInput: ["create", "connectOrCreate", "createMany", "connect"],
  CompanyCreateNestedOneWithoutRegionsInput: ["create", "connectOrCreate", "connect"],
  FormationUpdateManyWithoutRegionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CompanyUpdateOneWithoutRegionsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FormationCreateNestedManyWithoutSolutionsInput: ["create", "connectOrCreate", "connect"],
  FormationUpdateManyWithoutSolutionsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SolutionCreateNestedManyWithoutFormationsInput: ["create", "connectOrCreate", "connect"],
  ZoneCreateNestedManyWithoutFormationInput: ["create", "connectOrCreate", "createMany", "connect"],
  RegionCreateNestedOneWithoutFormationsInput: ["create", "connectOrCreate", "connect"],
  SolutionUpdateManyWithoutFormationsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ZoneUpdateManyWithoutFormationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RegionUpdateOneWithoutFormationsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FormationCreateNestedOneWithoutZonesInput: ["create", "connectOrCreate", "connect"],
  SmartPoleCreateNestedManyWithoutZoneInput: ["create", "connectOrCreate", "createMany", "connect"],
  FormationUpdateOneWithoutZonesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SmartPoleUpdateManyWithoutZoneNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DeviceTypeCreateNestedOneWithoutDevicesInput: ["create", "connectOrCreate", "connect"],
  AlertCreateNestedManyWithoutDeviceInput: ["create", "connectOrCreate", "createMany", "connect"],
  EventCreateNestedManyWithoutDeviceInput: ["create", "connectOrCreate", "createMany", "connect"],
  SmartPoleCreateNestedOneWithoutDevicesInput: ["create", "connectOrCreate", "connect"],
  DeviceTypeUpdateOneWithoutDevicesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  AlertUpdateManyWithoutDeviceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EventUpdateManyWithoutDeviceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SmartPoleUpdateOneWithoutDevicesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  DeviceCreateNestedManyWithoutTypeInput: ["create", "connectOrCreate", "createMany", "connect"],
  DeviceUpdateManyWithoutTypeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PriorityCreateNestedOneWithoutAlertsInput: ["create", "connectOrCreate", "connect"],
  DeviceCreateNestedOneWithoutAlertsInput: ["create", "connectOrCreate", "connect"],
  PriorityUpdateOneWithoutAlertsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  DeviceUpdateOneWithoutAlertsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  AlertCreateNestedManyWithoutPriorityInput: ["create", "connectOrCreate", "createMany", "connect"],
  EventCreateNestedManyWithoutPriorityInput: ["create", "connectOrCreate", "createMany", "connect"],
  AlertUpdateManyWithoutPriorityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EventUpdateManyWithoutPriorityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PriorityCreateNestedOneWithoutEventsInput: ["create", "connectOrCreate", "connect"],
  DeviceCreateNestedOneWithoutEventsInput: ["create", "connectOrCreate", "connect"],
  PriorityUpdateOneWithoutEventsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  DeviceUpdateOneWithoutEventsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ZoneCreateNestedOneWithoutSmartPolesInput: ["create", "connectOrCreate", "connect"],
  DeviceCreateNestedManyWithoutSmartPoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ZoneUpdateOneWithoutSmartPolesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  DeviceUpdateManyWithoutSmartPoleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserRoleCreateWithoutUsersInput: ["name"],
  UserRoleCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserGroupCreateWithoutUsersInput: ["name", "description", "color"],
  UserGroupCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserRoleUpsertWithoutUsersInput: ["update", "create"],
  UserRoleUpdateWithoutUsersInput: ["name"],
  UserGroupUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  UserGroupUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  UserGroupUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  UserGroupScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "color"],
  UserCreateWithoutRoleInput: ["lastName", "firstName", "email", "groups", "username", "avatar", "phone", "jobTitle"],
  UserCreateOrConnectWithoutRoleInput: ["where", "create"],
  UserCreateManyRoleInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "lastName", "firstName", "email", "roleId", "username", "avatar", "phone", "jobTitle"],
  UserCreateWithoutGroupsInput: ["lastName", "firstName", "email", "role", "username", "avatar", "phone", "jobTitle"],
  UserCreateOrConnectWithoutGroupsInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutGroupsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutGroupsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutGroupsInput: ["where", "data"],
  RegionCreateWithoutCompanyInput: ["name", "formations"],
  RegionCreateOrConnectWithoutCompanyInput: ["where", "create"],
  RegionCreateManyCompanyInputEnvelope: ["data", "skipDuplicates"],
  RegionUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
  RegionUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
  RegionUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
  RegionScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "companyId"],
  FormationCreateWithoutRegionInput: ["name", "address", "solutions", "zones"],
  FormationCreateOrConnectWithoutRegionInput: ["where", "create"],
  FormationCreateManyRegionInputEnvelope: ["data", "skipDuplicates"],
  CompanyCreateWithoutRegionsInput: ["name", "icon", "logo"],
  CompanyCreateOrConnectWithoutRegionsInput: ["where", "create"],
  FormationUpsertWithWhereUniqueWithoutRegionInput: ["where", "update", "create"],
  FormationUpdateWithWhereUniqueWithoutRegionInput: ["where", "data"],
  FormationUpdateManyWithWhereWithoutRegionInput: ["where", "data"],
  FormationScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "address", "regionId"],
  CompanyUpsertWithoutRegionsInput: ["update", "create"],
  CompanyUpdateWithoutRegionsInput: ["name", "icon", "logo"],
  FormationCreateWithoutSolutionsInput: ["name", "address", "zones", "region"],
  FormationCreateOrConnectWithoutSolutionsInput: ["where", "create"],
  FormationUpsertWithWhereUniqueWithoutSolutionsInput: ["where", "update", "create"],
  FormationUpdateWithWhereUniqueWithoutSolutionsInput: ["where", "data"],
  FormationUpdateManyWithWhereWithoutSolutionsInput: ["where", "data"],
  SolutionCreateWithoutFormationsInput: ["name"],
  SolutionCreateOrConnectWithoutFormationsInput: ["where", "create"],
  ZoneCreateWithoutFormationInput: ["name", "smartPoles"],
  ZoneCreateOrConnectWithoutFormationInput: ["where", "create"],
  ZoneCreateManyFormationInputEnvelope: ["data", "skipDuplicates"],
  RegionCreateWithoutFormationsInput: ["name", "company"],
  RegionCreateOrConnectWithoutFormationsInput: ["where", "create"],
  SolutionUpsertWithWhereUniqueWithoutFormationsInput: ["where", "update", "create"],
  SolutionUpdateWithWhereUniqueWithoutFormationsInput: ["where", "data"],
  SolutionUpdateManyWithWhereWithoutFormationsInput: ["where", "data"],
  SolutionScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  ZoneUpsertWithWhereUniqueWithoutFormationInput: ["where", "update", "create"],
  ZoneUpdateWithWhereUniqueWithoutFormationInput: ["where", "data"],
  ZoneUpdateManyWithWhereWithoutFormationInput: ["where", "data"],
  ZoneScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "formationId"],
  RegionUpsertWithoutFormationsInput: ["update", "create"],
  RegionUpdateWithoutFormationsInput: ["name", "company"],
  FormationCreateWithoutZonesInput: ["name", "address", "solutions", "region"],
  FormationCreateOrConnectWithoutZonesInput: ["where", "create"],
  SmartPoleCreateWithoutZoneInput: ["connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "devices"],
  SmartPoleCreateOrConnectWithoutZoneInput: ["where", "create"],
  SmartPoleCreateManyZoneInputEnvelope: ["data", "skipDuplicates"],
  FormationUpsertWithoutZonesInput: ["update", "create"],
  FormationUpdateWithoutZonesInput: ["name", "address", "solutions", "region"],
  SmartPoleUpsertWithWhereUniqueWithoutZoneInput: ["where", "update", "create"],
  SmartPoleUpdateWithWhereUniqueWithoutZoneInput: ["where", "data"],
  SmartPoleUpdateManyWithWhereWithoutZoneInput: ["where", "data"],
  SmartPoleScalarWhereInput: ["AND", "OR", "NOT", "id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zoneId"],
  DeviceTypeCreateWithoutDevicesInput: ["name"],
  DeviceTypeCreateOrConnectWithoutDevicesInput: ["where", "create"],
  AlertCreateWithoutDeviceInput: ["priority", "message"],
  AlertCreateOrConnectWithoutDeviceInput: ["where", "create"],
  AlertCreateManyDeviceInputEnvelope: ["data", "skipDuplicates"],
  EventCreateWithoutDeviceInput: ["priority", "moment", "message"],
  EventCreateOrConnectWithoutDeviceInput: ["where", "create"],
  EventCreateManyDeviceInputEnvelope: ["data", "skipDuplicates"],
  SmartPoleCreateWithoutDevicesInput: ["connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zone"],
  SmartPoleCreateOrConnectWithoutDevicesInput: ["where", "create"],
  DeviceTypeUpsertWithoutDevicesInput: ["update", "create"],
  DeviceTypeUpdateWithoutDevicesInput: ["name"],
  AlertUpsertWithWhereUniqueWithoutDeviceInput: ["where", "update", "create"],
  AlertUpdateWithWhereUniqueWithoutDeviceInput: ["where", "data"],
  AlertUpdateManyWithWhereWithoutDeviceInput: ["where", "data"],
  AlertScalarWhereInput: ["AND", "OR", "NOT", "id", "priorityId", "deviceId", "message"],
  EventUpsertWithWhereUniqueWithoutDeviceInput: ["where", "update", "create"],
  EventUpdateWithWhereUniqueWithoutDeviceInput: ["where", "data"],
  EventUpdateManyWithWhereWithoutDeviceInput: ["where", "data"],
  EventScalarWhereInput: ["AND", "OR", "NOT", "id", "priorityId", "moment", "message", "deviceId"],
  SmartPoleUpsertWithoutDevicesInput: ["update", "create"],
  SmartPoleUpdateWithoutDevicesInput: ["connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "zone"],
  DeviceCreateWithoutTypeInput: ["name", "serial", "uuid", "connectParamIndex", "alerts", "events", "smartPole"],
  DeviceCreateOrConnectWithoutTypeInput: ["where", "create"],
  DeviceCreateManyTypeInputEnvelope: ["data", "skipDuplicates"],
  DeviceUpsertWithWhereUniqueWithoutTypeInput: ["where", "update", "create"],
  DeviceUpdateWithWhereUniqueWithoutTypeInput: ["where", "data"],
  DeviceUpdateManyWithWhereWithoutTypeInput: ["where", "data"],
  DeviceScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "serial", "uuid", "typeId", "connectParamIndex", "smartPoleId"],
  PriorityCreateWithoutAlertsInput: ["name", "events"],
  PriorityCreateOrConnectWithoutAlertsInput: ["where", "create"],
  DeviceCreateWithoutAlertsInput: ["name", "serial", "uuid", "type", "connectParamIndex", "events", "smartPole"],
  DeviceCreateOrConnectWithoutAlertsInput: ["where", "create"],
  PriorityUpsertWithoutAlertsInput: ["update", "create"],
  PriorityUpdateWithoutAlertsInput: ["name", "events"],
  DeviceUpsertWithoutAlertsInput: ["update", "create"],
  DeviceUpdateWithoutAlertsInput: ["name", "serial", "uuid", "type", "connectParamIndex", "events", "smartPole"],
  AlertCreateWithoutPriorityInput: ["device", "message"],
  AlertCreateOrConnectWithoutPriorityInput: ["where", "create"],
  AlertCreateManyPriorityInputEnvelope: ["data", "skipDuplicates"],
  EventCreateWithoutPriorityInput: ["moment", "message", "device"],
  EventCreateOrConnectWithoutPriorityInput: ["where", "create"],
  EventCreateManyPriorityInputEnvelope: ["data", "skipDuplicates"],
  AlertUpsertWithWhereUniqueWithoutPriorityInput: ["where", "update", "create"],
  AlertUpdateWithWhereUniqueWithoutPriorityInput: ["where", "data"],
  AlertUpdateManyWithWhereWithoutPriorityInput: ["where", "data"],
  EventUpsertWithWhereUniqueWithoutPriorityInput: ["where", "update", "create"],
  EventUpdateWithWhereUniqueWithoutPriorityInput: ["where", "data"],
  EventUpdateManyWithWhereWithoutPriorityInput: ["where", "data"],
  PriorityCreateWithoutEventsInput: ["name", "alerts"],
  PriorityCreateOrConnectWithoutEventsInput: ["where", "create"],
  DeviceCreateWithoutEventsInput: ["name", "serial", "uuid", "type", "connectParamIndex", "alerts", "smartPole"],
  DeviceCreateOrConnectWithoutEventsInput: ["where", "create"],
  PriorityUpsertWithoutEventsInput: ["update", "create"],
  PriorityUpdateWithoutEventsInput: ["name", "alerts"],
  DeviceUpsertWithoutEventsInput: ["update", "create"],
  DeviceUpdateWithoutEventsInput: ["name", "serial", "uuid", "type", "connectParamIndex", "alerts", "smartPole"],
  ZoneCreateWithoutSmartPolesInput: ["name", "formation"],
  ZoneCreateOrConnectWithoutSmartPolesInput: ["where", "create"],
  DeviceCreateWithoutSmartPoleInput: ["name", "serial", "uuid", "type", "connectParamIndex", "alerts", "events"],
  DeviceCreateOrConnectWithoutSmartPoleInput: ["where", "create"],
  DeviceCreateManySmartPoleInputEnvelope: ["data", "skipDuplicates"],
  ZoneUpsertWithoutSmartPolesInput: ["update", "create"],
  ZoneUpdateWithoutSmartPolesInput: ["name", "formation"],
  DeviceUpsertWithWhereUniqueWithoutSmartPoleInput: ["where", "update", "create"],
  DeviceUpdateWithWhereUniqueWithoutSmartPoleInput: ["where", "data"],
  DeviceUpdateManyWithWhereWithoutSmartPoleInput: ["where", "data"],
  UserGroupUpdateWithoutUsersInput: ["name", "description", "color"],
  UserCreateManyRoleInput: ["id", "lastName", "firstName", "email", "username", "avatar", "phone", "jobTitle"],
  UserUpdateWithoutRoleInput: ["lastName", "firstName", "email", "groups", "username", "avatar", "phone", "jobTitle"],
  UserUpdateWithoutGroupsInput: ["lastName", "firstName", "email", "role", "username", "avatar", "phone", "jobTitle"],
  RegionCreateManyCompanyInput: ["id", "name"],
  RegionUpdateWithoutCompanyInput: ["name", "formations"],
  FormationCreateManyRegionInput: ["id", "name", "address"],
  FormationUpdateWithoutRegionInput: ["name", "address", "solutions", "zones"],
  FormationUpdateWithoutSolutionsInput: ["name", "address", "zones", "region"],
  ZoneCreateManyFormationInput: ["id", "name"],
  SolutionUpdateWithoutFormationsInput: ["name"],
  ZoneUpdateWithoutFormationInput: ["name", "smartPoles"],
  SmartPoleCreateManyZoneInput: ["id", "connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude"],
  SmartPoleUpdateWithoutZoneInput: ["connectLocationId", "connectDeviceId", "name", "serial", "latitude", "longitude", "devices"],
  AlertCreateManyDeviceInput: ["id", "priorityId", "message"],
  EventCreateManyDeviceInput: ["id", "priorityId", "moment", "message"],
  AlertUpdateWithoutDeviceInput: ["priority", "message"],
  EventUpdateWithoutDeviceInput: ["priority", "moment", "message"],
  DeviceCreateManyTypeInput: ["id", "name", "serial", "uuid", "connectParamIndex", "smartPoleId"],
  DeviceUpdateWithoutTypeInput: ["name", "serial", "uuid", "connectParamIndex", "alerts", "events", "smartPole"],
  AlertCreateManyPriorityInput: ["id", "deviceId", "message"],
  EventCreateManyPriorityInput: ["id", "moment", "message", "deviceId"],
  AlertUpdateWithoutPriorityInput: ["device", "message"],
  EventUpdateWithoutPriorityInput: ["moment", "message", "device"],
  DeviceCreateManySmartPoleInput: ["id", "name", "serial", "uuid", "typeId", "connectParamIndex"],
  DeviceUpdateWithoutSmartPoleInput: ["name", "serial", "uuid", "type", "connectParamIndex", "alerts", "events"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

